import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// Updated...
import { Observable, of } from 'rxjs';
// New...
import { catchError, tap } from "rxjs/operators";

import { Student, ReqresStudentCollectionPackage, CourseCollection, Course, SingleCourse, SingleStudent } from "./student";
//import { Class1, Class2 } from "./data-model-classes";

@Injectable({
  providedIn: 'root'
})
export class DataModelManagerService {
  
  constructor(private http: HttpClient) { }

  // Edit the base URL string to the web service
  private url: string = "https://desolate-mesa-35812.herokuapp.com/api";

  // Options object for POST and PUT requests
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Error handler, from the Angular docs
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public student: Student;
  // Data service operations

  // Get all
  StudentGetAll(): Observable<ReqresStudentCollectionPackage> {

    return this.http.get<ReqresStudentCollectionPackage>(`${this.url}/students`);
  }

  CourseGetAll(): Observable<CourseCollection> {

    return this.http.get<CourseCollection>(`${this.url}/courses`);
  }

  // Get one
  StudentGetById(studentid: number): Observable<SingleStudent> {

    return this.http.get<SingleStudent>(`${this.url}/students/${studentid}`);
  }

  CourseGetById(courseid: number): Observable<SingleCourse> {

    return this.http.get<SingleCourse>(`${this.url}/courses/${courseid}`);
  }

  GetCourseByTerm(program: string, term: string): Observable<CourseCollection> {

    return this.http.get<CourseCollection>(`${this.url}/courses/${program}/${term}`);
}

}
