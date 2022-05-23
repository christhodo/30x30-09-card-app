import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetsComponent } from './sets/sets.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { BackendComponent } from './backend/backend.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AdminComponent } from './backend/child-routes/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SetsComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent,
    BackendComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
