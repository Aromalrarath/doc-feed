import { Component } from '@angular/core';
import { CoreService } from './core/services/core.service';
import { AppStore } from './store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doc-feed';
  AppStore = AppStore
  constructor(
    private _coreService: CoreService
  ){ }

  ngOnInit(){
    this._coreService.subscribeRouteEvents();
  }
}
