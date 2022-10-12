import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoDataComponent } from './todo-data/todo-data.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:TodoDataComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
