import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { HeaderNavComponent } from './header-nav.component';
import { NotFoundComponent } from './not-found.component';
import { studentComponent } from './user-list.component';
import { CoursesListComponent } from './courses-list.component';
import { StudentDetailsComponent } from './student-details.component';
import { CartSelectedListComponent } from './cart-selected-list.component';
import { CartSelectedGridComponent } from './cart-selected-grid.component';
import { CartSelectedCellComponent } from './cart-selected-cell.component';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderNavComponent,
    NotFoundComponent,
    studentComponent,
    CoursesListComponent,
    StudentDetailsComponent,
    CartComponent,
    CartSelectedListComponent,
    CartSelectedGridComponent,
    CartSelectedCellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
