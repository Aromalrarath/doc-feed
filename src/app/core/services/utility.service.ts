import { ChangeDetectorRef, Injectable } from '@angular/core';
import { SnackbarService } from 'ngx-snackbar';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private _snackbarService: SnackbarService,
    private _toastr: ToastrService,
  ) { }
  
  showSuccessMessage(title: string, message: string) {
    this._toastr.success(title, message);
  }

  hideSuccessMessage() {
    this._toastr.clear();
  }

  showErrorMessage(title: string, message: string) {
    this._toastr.error(title, message);
  }

  showWarningMessage(title: string, message: string){
    this._toastr.warning(title, message);
  }

  detectChanges(cdr: ChangeDetectorRef) {
    if (!cdr['destroyed']) cdr.detectChanges();
  }

  //Scroll Window to Top
  scrollToTop(){
    window.scroll(0,0);
  }
}
