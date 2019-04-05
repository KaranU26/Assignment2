import { Component, OnInit } from '@angular/core';
import { Student, Course, ResponseStudent, Credit } from "./student";
import { DataModelManagerService } from "./datamodelmanager.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  courses: Course[];
  student: Student;
  coursesSelected: Course[];
  coursesEqual: Course[];

  constructor(private route: Router, private m: DataModelManagerService) {

    this.coursesEqual = [];
    this.coursesSelected = [];

    if (this.m.student) {
      
      this.student = this.m.student;
    }
    else
    {
      this.route.navigate(['/students']);
    }
  }

  ngOnInit() {

    this.m.GetCourseByTerm(this.student.academicProgram, "2018 Fall").subscribe(u => {this.courses = u.data; this.courseMatch();});
  }

  courseMatch(): void{
    
    this.coursesEqual.forEach(course => {

      let prereq: Boolean = true;

      if (course.enrolTotal < 4) {

        let multiplePrereqs: Boolean = false

        course.prerequisite.forEach(prerequisite => {

          this.student.credits.forEach(credit => {

            if (credit.courseCode == prerequisite) {
              multiplePrereqs = true
            }
          })
          if (multiplePrereqs == false) {
            
            prereq = false;
          }
        })

        if (prereq == true) {
          
          course.classStart = course.classStart.slice(0, course.classStart.length -3);

          course.classEnd = course.classEnd.slice(0, course.classEnd.length -3);

          this.coursesEqual.push(course);
        }
      }
    })
  }

  CourseSelected(course: Course): Boolean {
    let found: Boolean = false;

    for (let index = 0; index < this.coursesSelected.length && !found; index++)

        if (this.coursesSelected[index].termSectionId == course.termSectionId) found = true;
        
    return found;
}

  courseSelect(coursesSelection: Course): void {

    let courseFind: Boolean = false;

    for (let i = 0; i < this.coursesSelected.length && !courseFind; i++)
    {
        if (this.coursesSelected[i].termSectionId == coursesSelection.termSectionId) {

          courseFind = true;
        }

        if (courseFind){

          this.coursesSelected.splice(i - 1, 1);

        }
        else
        {
          this.coursesSelected.push(coursesSelection);
        }
    }

} 


}
