import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ApiBasePathInterceptor } from "./auth/interceptors/apiBasePath-interceptors";
import { HeaderInterceptor } from "./auth/interceptors/header.interceptor";
import { FooterComponent } from "./layouts/footer/footer.component";
import { HeaderComponent } from "./layouts/header/header.component";
import { LeftNavBarComponent } from "./layouts/left-nav-bar/left-nav-bar.component";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { RightNavBarComponent } from "./layouts/right-nav-bar/right-nav-bar.component";


@NgModule({
  declarations: [
      MainLayoutComponent,
      HeaderComponent,
      FooterComponent,
      LeftNavBarComponent,
      RightNavBarComponent,
    ],
    imports:[
      SharedModule
    ],
    providers:[
      { provide: HTTP_INTERCEPTORS, useClass: ApiBasePathInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule { }