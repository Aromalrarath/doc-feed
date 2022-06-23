import { observable, action } from 'mobx-angular';
import { ActivatedRoute } from '@angular/router';

class Store {

    @observable
    title: string = 'SNS';

    @observable
    noContentText: string = 'NA';

    // Snackbar position, default: tr (top right)
    @observable
    snackbarPosition = 'tr';

    previousUrl: string = null;

    currentUrl: string = null;

    dateFormat = [
        // { title: "shortDate", value: "M/d/yy" },
        { title: "mediumDate", value: "MMM d, y" },
        // { title: "longDate", value: "MMMM d, y" },
        // { title: "dd/MM/yy", value: "dd/MM/yy" },
        // { title: "fullDate", value: "EEEE, MMMM d, y" }
    ]
    
      // time formate object
      timeFormat = [
        { title: "short", value: "M/d/yy, h:mm a" },
        { title: "medium", value: "MMM d, y, h:mm:ss a" },
        { title: "long", value: "MMMM d, y, h:mm:ss a z" },
        { title: "dd/MM/yyyy hh:mm:ss", value: "dd/MM/yyyy hh:mm:ss"},
        { title: "full", value: "EEEE, MMMM d, y, h:mm:ss a zzzz" },
      ]

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
    dateFormate() {
        return this.dateFormat[0].title
    }

    @action
    disableLoading() {
        this.loading = false;
    }

    @action
    setTitle(title: string) {
        if (title) this.title = `${title.trim()} SNS`;
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