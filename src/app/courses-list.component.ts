import { Component, OnInit } from '@angular/core';
import { Course } from "./Student";
import { DataModelManagerService } from "./datamodelmanager.service";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Course[];
  course: Course;

  constructor(private m: DataModelManagerService) { 
  }

  ngOnInit() {
    this.m.CourseGetAll().subscribe(u => this.courses = u.data);
  }

}