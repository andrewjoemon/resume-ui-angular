import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ContainerComponent } from './container/container.component';
import { TemplateComponent } from './template/template.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';
import { NavbarModule } from './navbar/navbar.module';
import { routeConfigToken } from './services/routeConfig.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorsHandle } from './errorhandler.service';

function initFactory(initService:InitService){
  return ()=>initService.init();
}


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TemplateComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    NotfoundComponent,
    HoverDirective,
    EmailvalidatorDirective,
  ],
  imports: [
    BrowserModule,
    //FormModule,
    AppRoutingModule,
    RatingModule.forRoot(),
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    NavbarModule,
    MatSnackBarModule,
    
  ],
  providers: [{
    provide:APP_SERVICE_CONFIG,
    useValue:APP_CONFIG
  },
  {
    provide:routeConfigToken,
    useValue:{title:"Home"}
  },
{
  provide:HTTP_INTERCEPTORS,
  useClass:RequestInterceptor,
  multi:true
},
{
  provide:APP_INITIALIZER,
  useFactory:initFactory,
  deps:[InitService],
  multi:true
},
{
  provide:ErrorHandler,
  useClass:ErrorsHandle
}],
  bootstrap: [AppComponent]
})
export class AppModule { }

