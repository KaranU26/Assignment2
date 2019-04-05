
export class Credit {
    courseCode: string;
    courseName: string;
    termCompleted: string;
    gradeEarned: string;
  }
  
  
  export class Student {
    academicProgram: string;
    studentId: string;
    familyName: string;
    givenName: string;
    birthDate: string;
    email: string;
    academicLevel: number;
    gpa: number;
    credits: Credit[];
    coursesSaved: Course[];
    coursesConfirmed: Course[];
  }

  export class ReqresStudentCollectionPackage {
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    data: Student[];
  }

  export class SingleStudent {
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    data: Student;
}
  
export class Course {
  courseId: number;
  term: String;
  academicProgram: String;
  level: number;
  prerequisite: string[];
  courseCode: String;
  section: String;
  termSectionId: number;
  enrolCapacity: number;
  enrolTotal: number;
  room: string;
  roomCapacity: number;
  classStart: string;
  classEnd: string;
  classMon: string;
  classTue: string;
  classWed: string;
  classThu: string;
  classFri: string;
  dateStart: string;
  dateEnd: string;
  professor: string;
}

export class CourseCollection {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: Course[];
}
export class ResponseStudent {
  id?: number;
  name: string;
  job: string;
  createdAt: string;
}

export class SingleCourse {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: Course;
}