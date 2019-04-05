import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from "./not-found.component";
import { HomeComponent } from "./home.component";
import { AboutComponent } from './about.component';
import { studentComponent } from './user-list.component';
import { CoursesListComponent } from './courses-list.component';
import { StudentDetailsComponent } from './student-details.component'
import { CartComponent } from './cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'students', component: studentComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'students/detail/:id', component: StudentDetailsComponent },
  { path: 'cart/select', component: CartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
