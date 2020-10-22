import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.resetSelectedCourse();
  }

  resetSelectedCourse(): any {
    this.selectedCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };
  }

  selectCourse(course): any {
    this.selectedCourse = course;
  }

  saveCourse(): any {
    console.log('SAVE SOURCE!');
  }

  deleteCourse(courseId): void {
    console.log('COURSE DELETED!', courseId);
  }

  cancel(): void {
    this.resetSelectedCourse();
  }
}
