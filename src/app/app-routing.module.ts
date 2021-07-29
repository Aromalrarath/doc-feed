import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './core/auth/guards/logged-in.guard';
import { LoggedOutGuard } from './core/auth/guards/logged-out.guard';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    canActivate: [LoggedOutGuard],
    data: { core: { title: 'Login' } }
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule),
    canActivate: [LoggedOutGuard],
    data: { core: { title: 'Register' } }
  },
  {
    path:'',
    component:MainLayoutComponent,
    canActivateChild:[LoggedInGuard],
    children:[
      {
        path: 'chats',
        loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule),
        data: { core: { title: 'Chats' } }
      },
      {
        path: 'feeds',
        loadChildren: () => import('./modules/feed/feed.module').then(m => m.FeedModule),
        data: { core: { title: 'News Feed' } }
      },
      {
        path: 'pages',
        loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule),
        data: { core: { title: 'Pages' } }
      },
      {
        path: 'videos',
        loadChildren: () => import('./modules/videos/videos.module').then(m => m.VideosModule),
        data: { core: { title: 'Videos' } }
      },
      {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
        data: { core: { title: 'Profile' } }
      },
      {
        path: 'timeline',
        loadChildren: () => import('./modules/timeline/timeline.module').then(m => m.TimelineModule),
        data: { core: { title: 'Timeline' } }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
