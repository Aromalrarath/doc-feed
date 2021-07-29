import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  toggled: boolean = false;
  message: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  handleSelection(event) {
    console.log(event.emoji.native);
    // this.message += event.char;
    this.message +=event.emoji.native
      this.toggled = false;
  }

}
