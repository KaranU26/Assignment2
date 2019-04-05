import { Component, OnInit, Input } from '@angular/core';
import { Student } from "./Student";
import { ActivatedRoute } from "@angular/router";
import { DataModelManagerService } from "./datamodelmanager.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  students: Student[];
  student: Student;

  constructor(private route: ActivatedRoute, private m: DataModelManagerService) {

  }

  ngOnInit() {

    let studentID = this.route.snapshot.params['id'];

    this.m.StudentGetById(studentID).subscribe(u => {this.student = u.data; this.m.student = this.student;});
  }

}