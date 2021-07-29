import { Injectable } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute, Data, NavigationStart } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { AppStore } from "src/app/store/app.store";

@Injectable({
    providedIn: 'root'
})

export class CoreService {

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _title: Title,
    ) { }

    setPageTitle() {
        this._title.setTitle(AppStore.title);
    }

    subscribeRouteEvents() {
        this._router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this._activatedRoute),
            map(route => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
        ).subscribe(route => {
            window.scroll(0,0);
            AppStore.setRoute(route);
            this.setAppTitleFromRoute();
            this.setPageTitle();
        });

        this._router.events
        .pipe(filter(event => event instanceof NavigationStart))
        .subscribe((ev: NavigationStart) =>{
            AppStore.previousUrl = AppStore.currentUrl;
            AppStore.currentUrl = ev.url;
        });
    }

    setAppTitleFromRoute() {
        const route: ActivatedRoute = AppStore.route;

        let title = '';

        let tempRoute = route;
        const allRoutesData: Data = [route.data];

        while (tempRoute.parent) {
            allRoutesData.push(tempRoute.parent.data);
            tempRoute = tempRoute.parent;
        }

        let previousValue = '';
        for (let i = 0; i < allRoutesData.length; i++) {
            const data = allRoutesData[i].value
            if (data['core'] && data['core']['title'] && data['core']['title'] != previousValue) {
                title += data['core']['title'] + ' | ';
                previousValue = data['core']['title'];
            }
        }

        if (title) AppStore.setTitle(title);
    }

}