import { action, computed, observable } from "mobx";
import { RequestList, User, UserList } from "src/app/models/user.model";


class Store {
    @observable
    loading: boolean = false;

    @observable
    userList: UserList = null

    @observable
    friendRequest: RequestList = null

    @observable
    friendsList: RequestList = null

    @action
    setUserList(userList: UserList) {
        this.userList = userList;
        this.loading = true;
    }

    @computed
    get usersList() {
        return this.userList
    }

    @action
    setRequestList(RequestList: RequestList) {
        this.friendRequest = RequestList;
        this.loading = true;
    }

    @computed
    get RequestsList() {
        return this.friendRequest
    }

    @action
    setFriendsList(RequestList: RequestList) {
        this.friendsList = RequestList;
        this.loading = true;
    }

    @computed
    get FriendsList() {
        return this.friendsList
    }
}

export const UserStore = new Store()