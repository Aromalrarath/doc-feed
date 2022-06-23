import { Component, OnInit } from '@angular/core';
import { PostStore } from 'src/app/store/post/post.store';
import { EventEmitterService } from '../../services/event-emitter.service';

declare var UIkit: any;
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  PostStore = PostStore
  createPopupSubscription
  showPopup:boolean = false

  constructor(
    private _eventEmitterService: EventEmitterService
  ) { }

  ngOnInit(): void {
    this.createPopupSubscription = this._eventEmitterService.showCreatePostModal.subscribe(status => {
      this.showPopup = true
    })
  }

  openModal(){

  }

}
