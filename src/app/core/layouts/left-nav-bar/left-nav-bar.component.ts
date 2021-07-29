import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css']
})
export class LeftNavBarComponent implements OnInit {

  constructor(
    private _route: Router
  ) { }

  ngOnInit(): void {
  }

  checkPathStatus(url){
    if(this._route.url.indexOf(url) != -1 && this._route.url.indexOf(url) < 3)
            return true;
        else
            return false;
  }
  
}
