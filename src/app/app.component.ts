import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

// Question:
// Read carefully and start
// 1. Trigger the endpoint "https://language-json-files.s3.amazonaws.com/Interview/student_list.json" using angular HTTP client and show the spinner while API is in progress and dismiss after the response bound.2. Calculate the total mark and show it in the table.

// 2. The UI should contain the table with a search bar and filter option(name, total marks asc & desc ).

// 3. To show all student data in the table with names and all mark details.

// 4. Highlights the mark with red when the student fails the subject and mark it as green while passing the subject.

// 5. Able to search the student using the student name list in the UI filter using the angular pipe.5. Able to order the students with names ascending and descending when clicking on the filter options.

// Notes:
// 1. Use service for all those methods.
// 2. Use the interceptor concept for the API endpoint.
