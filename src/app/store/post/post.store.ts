import { action, observable } from "mobx";
import { Post, PostResponse } from "src/app/models/post.model";

class Store {

    @observable
    loading: boolean = false;

    @observable
    post: Post[] = [];

    @action
    setUserPost(post: PostResponse) {
        this.post = post.data;
        this.loading = true;
    }

}
 export const PostStore = new Store()