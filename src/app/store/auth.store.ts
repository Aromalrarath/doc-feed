import { observable, action, computed } from 'mobx-angular';
import { User } from '../models/user.model';

class Store {
    @observable
    user: User;

    @observable
    redirectUrl: string = null;

    @observable
    userPermissions:any[] = [];

    @observable
    authenticationProgress: number = 0;

    @observable
    userId: number;
    
    @computed
    get isAuthenticated() {
        return !!this.user;
    }

    @computed
    get logedInUser() {
        return this.user;
    }

    @action
    setUser(user: User) {
        this.user = user;
    }

    @action
    setRedirectUrl(url: string) {
        this.redirectUrl = url;
    }

    @action
    setUserPermissions(permissions: any[]){
        this.userPermissions = permissions;
    }

    @action
    setUserId(id: number){
        this.userId = id;
    }

    // getPermissableModules(moduleGroupId: number): Module[]{
    //     var modules: Acl = this.userPermissions.find(e => e.module_group_id == moduleGroupId);
    //     if(modules && modules.hasOwnProperty('modules')){
    //         var items = modules.modules.reduce((p,c)=>{
    //             if(c.is_enabled)
    //                 p.push(c);
    //             return p;
    //         },[]);
    //         return items;
    //     }
    //     else
    //         return [];
    // }

    // getModuleActivities(moduleGroupId: number, moduleId: number): Activity[]{
    //     var modules: Acl = this.userPermissions.find(e => e.module_group_id == moduleGroupId);
    //     if(modules && modules.hasOwnProperty('modules')){
    //         var activities = modules.modules.reduce((p,c)=>{
    //             if(c.module_id == moduleId)
    //                 p = c.activities;
    //             return p;
    //         },[]);
    //         return activities;
    //     }
    //     else return [];
    // }

    // getActivityPermission(moduleGroupId: number, moduleId: number, activityId: number):boolean{
    //     var activities = this.getModuleActivities(moduleGroupId,moduleId);
    //     var returnValue: boolean = false;
    //     if(activities){
    //         var activityItem = activities.find(e=>e.activity_id == activityId);
    //         returnValue = activityItem ? activityItem.is_enabled : false;
    //     }
    //     return returnValue;
    // }

    getActivityPermission(moduleGroupId: number, activityName: string):boolean{
        var returnValue: boolean;
        // if(this.userPermissions.length > 0 && this.userPermissions[0].hasOwnProperty(moduleGroupId)){
            // var pos = this.userPermissions[0][moduleGroupId].indexOf(activityName);
            var pos = this.userPermissions.indexOf(activityName);
            if(pos != -1)
                returnValue = true;
            else
                returnValue = false;
        // }
        // else{
        //     returnValue = false;
        // }
        return returnValue;
    }

    
}

export const AuthStore = new Store();