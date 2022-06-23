import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { UtilityService } from '../../services/utility.service';
// import { FormError } from 'src/app/stores/general/form-error.store';

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(
        private _utilityService: UtilityService,
        private _router: Router,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(error => this._errorHandler(error,request)));
    }

    private _errorHandler(response: HttpErrorResponse,request: HttpRequest<any>): Observable<HttpEvent<any>> {
        if (!environment.production) {
        }
        if (response.status == 500) {this._utilityService.showErrorMessage('Something went wrong. Please try again.', 'w');
            this._router.navigateByUrl('error/error-occured');
        }
        if (response.status == 401) {
            const urlSplit = response.url.split('/');
            if(urlSplit.indexOf('integrations') != -1) {
                this._router.navigateByUrl('/login');
                this._utilityService.showErrorMessage('Invalid User', 'w');
            }
            else if(urlSplit.indexOf('two-factor') != -1){}
            else if ((urlSplit[urlSplit.length - 1] != 'login') && (urlSplit[urlSplit.length - 3] != 'api')) {
                this._router.navigateByUrl('/login');
                this._utilityService.showWarningMessage('Session expired. Please login again.', 'w');
            }
        }
        if (response.status == 422) {
            this._utilityService.showErrorMessage("error", "input_validation_failed");
        }

        if (response.status == 405) {
            this._utilityService.showWarningMessage("warning",response.error.message ? response.error.message : 'something_went_wrong');
        }
        if (response.status == 403){
            if(request.headers.get('custom-header')){
                this._utilityService.showWarningMessage("warning",response.error.message ? response.error.message : 'something_went_wrong');
            }
            else{
                this._utilityService.showErrorMessage('Permission Denied', 'Error');
                this._router.navigateByUrl('error/permission-denied');
            }
        }
        if (response.status == 404){
            this._utilityService.showErrorMessage('File Not Found', 'w');
            this._router.navigateByUrl('error/file-not-found');
        }
        throw response;
    }

}

/********************For Handling Mssql DB */
/*
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap(evt => this._responseHandler(evt)),catchError(error => this._errorHandler(error,request)));
}

private _responseHandler(response: any){
        if (response instanceof HttpResponse) {
            if(response.status == 200 && response.body){
                if(response.body.hasOwnProperty('data') && response.body.data.length > 0){
                    for(let i of response.body.data){
                        let strId = typeof(i.id) == 'string' ? parseInt(i.id) : i.id;
                        i.id = strId;
                    }
                }
                else {
                    if(Array.isArray(response.body)){
                        for(let i of response.body){
                            if(i.hasOwnProperty('id')){
                                let strId = typeof(i.id) == 'string' ? parseInt(i.id) : i.id;
                                i.id = strId;
                            }
                        }
                    }
                }
                return response;
            }
            else 
                return response;
        }
    }

*/

/**************************************************** */