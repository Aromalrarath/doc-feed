import { observable, action } from 'mobx-angular';
import { ActivatedRoute } from '@angular/router';

class Store {

    @observable
    title: string = 'Docfeed';

    @observable
    noContentText: string = 'NA';

    // Snackbar position, default: tr (top right)
    @observable
    snackbarPosition = 'tr';

    previousUrl: string = null;

    currentUrl: string = null;

    //loading
    @observable
    loading: boolean = false;

    // NavigationEnd (Router changing event)
    @observable
    route: ActivatedRoute = null;

    @action
    enableLoading() {
        this.loading = true;
    }

    @action
    disableLoading() {
        this.loading = false;
    }

    @action
    setTitle(title: string) {
        if (title) this.title = `${title.trim()} Docfeed`;
    }

    @action
    setSnackbarPosition(position: 'tl' | 'tc' | 'tr' | 'bl' | 'bc' | 'br') {
        this.snackbarPosition = position ? position : 'tr';
    }

    @action
    setRoute(currentRoute: ActivatedRoute) {
        this.route = currentRoute;
    }
}
export const AppStore = new Store()