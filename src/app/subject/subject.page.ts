import { Component, OnInit } from '@angular/core';
import  {SubjectService}  from '@app/_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {
  subjectList
  constructor(private subjectService: SubjectService,
              private router: Router) { }

  ngOnInit() {
    this.loadClassData();
  }

  loadClassData() {
    this.subjectService.loadSubjectList(localStorage.getItem('classId'))
      .subscribe(
        (data: any) => {
          console.log(data);
          this.subjectList= data;
        },
        (error: any) => {
          
        });
  }
  selectSubject(subjectDetails: any) {
    localStorage.setItem('subjectId',subjectDetails.subjectCategoryId);
    this.router.navigate(['mcq']);
  }
}
