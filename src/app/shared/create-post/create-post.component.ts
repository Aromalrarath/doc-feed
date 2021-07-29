import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  selectedFile: File
  form: FormGroup;
  toggled: boolean = false;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      id: [''],
      post: ['', [Validators.required]],
      privacy: [null,[Validators.required]],
      documents: ['']
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log("file",this.selectedFile)
  }

  handleSelection(event) {
    console.log(event.char);
  }

}
