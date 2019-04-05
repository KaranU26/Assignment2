import { Component, OnInit } from '@angular/core';
import { Student } from "./student";
import { DataModelManagerService } from "./datamodelmanager.service";


@Component({
  selector: 'app-student',
  templateUrl: './user-list.component.html',
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