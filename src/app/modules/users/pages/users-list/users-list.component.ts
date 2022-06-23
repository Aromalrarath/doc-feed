import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { UserStore } from 'src/app/store/users/user.store';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  UserStore = UserStore
  tab:number = 1

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.fetchFriendRequests()
  }

  fetchFriendsList(){
    this._userService.findAllFriendsList().subscribe(res => {

    })
  }

  fetchFriendRequests(){
    this._userService.findAllUsersFriendRequests().subscribe(res => {
    })
  }

  fetchUsersList(){
    this._userService.findAllUsersForFriendsList().subscribe(res => {

    })
  }

  changeTab(tab:number){
    this.tab = tab
  }

}
