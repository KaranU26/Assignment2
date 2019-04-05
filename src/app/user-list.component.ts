import { Component, OnInit } from '@angular/core';
import { Student } from "./student";
import { Router } from '@angular/router';
import { DataModelManagerService } from "./datamodelmanager.service";


@Component({
  selector: 'app-student',
  templateUrl: './user-List.component.html',
  styleUrls: []
})
export class studentComponent implements OnInit {

  students: Student[];
  student: Student;

  constructor(private m: DataModelManagerService) {

  }

  ngOnInit() {

    this.m.StudentGetAll().subscribe(u => {this.students = u.data;});
  }

}