import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';
import { PostService } from 'src/app/core/services/post/post.service';
import { UtilityService } from 'src/app/core/services/utility.service';
import { AuthStore } from 'src/app/store/auth.store';
import { PostStore } from 'src/app/store/post/post.store';

declare var $: any;
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @ViewChild('create-post-modal') chartForAuditStatus: ElementRef<HTMLElement>;
  @Input('source') source:any

  selectedFile: File
  form: FormGroup;
  toggled: boolean = false;
  fileUploadsArray = [];


  constructor(
    private _formBuilder: FormBuilder,
    private _postService: PostService,
    private _eventEmitterService: EventEmitterService,
    private _cdr: ChangeDetectorRef,
    private _utilityService: UtilityService,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      id: [''],
      description: ['', [Validators.required]],
      privacy: [null,[Validators.required]],
      documents: ['']
    });
  }

  ngAfterViewInit(){
    console.log("value",this.source)
    if(this.source && this.source.value){
      this.setFormValue()
      this._utilityService.detectChanges(this._cdr)
    }
  }

  setFormValue(){
    this.form.patchValue({
      id:this.source.value.id,
      description:this.source.value.description
    })
    this._utilityService.detectChanges(this._cdr)
  }

  onFileChanged(event) {
    var selectedFiles: any[] = event.target.files;
    if(selectedFiles.length>0){
      var temporaryFiles = this.addItemsToFileUploadProgressArray(selectedFiles);
      Array.prototype.forEach.call(temporaryFiles, elem => {
        const file = elem;
        const formData = new FormData();
        formData.append('file', file);
        console.log("fileee",file)
      });
    }
  }

  getPreviewUrl(preview){
    return this._http.get('/settings/temp/file/'+preview,{ responseType: 'blob' });
  }

  /**
   * 
   * @param files Selected files array
   * @param type type of selected files - logo or brochure
   */
   addItemsToFileUploadProgressArray(files) {
    var result = this.FileUploadProgressArray(files, this.fileUploadsArray);
    this.fileUploadsArray = result.fileUploadsArray;
    return result.files;
  }

  /**
	 * 
	 * @param files Selected files array
	 * @param type type of selected files - logo or brochure
	 */
	FileUploadProgressArray(files, fileUploadsArray) {
		for (let i of files) {
			i['position'] = fileUploadsArray.length;
			i['uploadProgress'] = 0;
			i['success'] = false;
			fileUploadsArray.unshift(i);
		}
		return { 'files': files, 'fileUploadsArray': fileUploadsArray };
	}

  handleSelection(event) {
    console.log(event.char);
  }

  processDataForSave(){
    let saveData = {
      id:this.form.value.id?this.form.value.id:null,
      userId: AuthStore.user.id,
      description: this.form.value.description
    }
    return saveData
  }

  createdPostByUser(){
    let saveData = this.processDataForSave()
    let save;
    if(this.form.value && this.form?.value?.id){
    save = this._postService.updateLoginUserPosts(saveData)
    }else{
    save = this._postService.createLoginUserPosts(saveData)
    }

    save.subscribe(res => {
     if(res){
      $('#create-post-modal').removeClass('uk-open').hide();
      this.resetForm();
      this.exit()
      setTimeout(() => {
        this._utilityService.detectChanges(this._cdr);
      }, 100);
     }
    })
  }

  exit(){
    this.resetForm()
    this._eventEmitterService.hidePostModal()
  }

  resetForm(){
    this.form.reset()
    this.form.pristine;
  }

  ngOnDestroy(){
    this.resetForm()
  }

}
