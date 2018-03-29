// Angular 'Core' Modules v5
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App modules
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './/material.module';

// Pipes
import { ObjKeysPipe } from './pipes/obj-keys.pipe';

// App Components
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { UserListComponent } from './user-list/user-list.component';

// App module Declarations, Providers and Bootstraping
@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    MovieDetailsComponent,
    UserListComponent,
    ObjKeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
