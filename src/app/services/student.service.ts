import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl =
    'https://0c204334-7982-4c9b-ab06-fd5791c56d5f.mock.pstmn.io/students';
  //'https://language-json-files.s3.amazonaws.com/Interview/student_list.json';

  constructor(private http: HttpClient) {}

  getStudentsInfo(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
