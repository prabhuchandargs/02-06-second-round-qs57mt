import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { LoadingService } from '../../services/loading.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: any[];
  filteredStudents: any[];
  searchKeyword: string;
  orderBy: string;
  sortingOrder: 'asc' | 'desc';
  loading$: Observable<boolean>;

  constructor(
    private studentService: StudentService,
    private loadingService: LoadingService
  ) {
    this.students = [];
    this.filteredStudents = [];
    this.searchKeyword = '';
    this.orderBy = 'name';
    this.sortingOrder = 'asc';
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    // this.loadingService.showLoading;

    this.studentService.getStudentsInfo().subscribe(
      (response) => {
        console.log(response);
        this.students = response;
        this.filteredStudents = [...this.students];

        //this.loadingService.hideLoading();
      },
      (error) => {
        // this.loadingService.hideLoading();
      }
    );
  }

  applyFilter() {
    if (this.orderBy === 'name_asc') {
      this.filteredStudents = [...this.students].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (this.orderBy === 'name_desc') {
      this.filteredStudents = [...this.students].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    } else if (this.orderBy === 'total_asc') {
      this.filteredStudents = this.students.sort(
        (a, b) => this.getTotalMarks(a) - this.getTotalMarks(b)
      );
    } else if (this.orderBy === 'total_desc') {
      this.filteredStudents = this.students.sort(
        (a, b) => this.getTotalMarks(b) - this.getTotalMarks(a)
      );
    }
  }

  getTotalMarks(student: any) {
    return student.physics + student.maths + student.english;
  }

  isFailingMark(mark: Number) {
    return mark < 35;
  }

  setOrder(orderBy: string) {
    this.orderBy = orderBy;
  }
}
