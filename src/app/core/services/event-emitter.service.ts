import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EventEmitterService {
    showCreatePostModal: EventEmitter<number> = new EventEmitter();
    hidCreatePostModal: EventEmitter<number> = new EventEmitter();

    constructor() { }

    showPostModal(){
        this.showCreatePostModal.emit();
    }

    hidePostModal(){
        this.hidCreatePostModal.emit();
    }
}