import { action, computed, observable } from "mobx";
import { Post, PostResponse } from "src/app/models/post.model";

class Store {

    @observable
    loading: boolean = false;

    @observable
    enablePopup: boolean = false;

    @observable
    post: Post[] = [];

    @observable
    postToEdit: Post=null;

    @action
    setUserPost(post: PostResponse) {
        this.post = post.data;
        this.loading = true;
    }

    @action
    setAllPosts(post:Post[]){
        this.post = post
    }

    @computed
    get allPosts(){
        return this.post.slice()
    }

    @action
    setPostToEdit(post){
        this.postToEdit = post
    }

    @action
    clearPostToEdit(){
        this.postToEdit = null
    }

    @computed
    get editPost() {
        return this.postToEdit;
    }

    @action
    enableCreatePostPopoup() {
        this.enablePopup = true;
    }

    @action
    disableCreatePostPopoup() {
        this.enablePopup = false;
    }

}
 export const PostStore = new Store()