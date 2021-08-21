import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { UserdemoapiComponent } from './userdemoapi/userdemoapi.component';
import{  HttpClientModule} from '@angular/common/http';
 

console.log("admin module")
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    UserdemoapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
