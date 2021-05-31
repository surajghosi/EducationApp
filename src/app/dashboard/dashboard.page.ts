import { Component, OnInit } from '@angular/core';
import {SubjectPage} from '@app/subject/subject.page';
import  {ClassService}  from '@app/_services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  navigate : any;
  tab1Root = SubjectPage;
  classList: any;
  constructor(private clasService: ClassService,
              private router: Router) { 
    this.sideMenu();
    this.initializeApp();
  }

  ngOnInit() {
   this.loadClassData();
  }
  selectClass(classDetails: any) {
    localStorage.setItem('classId',classDetails.classId)
    this.router.navigate(['subject']);
  }
  

  loadClassData() {
    this.clasService.loadClassList()
      .subscribe(
        (data: any) => {
          console.log(data);
          this.classList= data;
        },
        (error: any) => {
          
        });
  }
  initializeApp() {
    // this.platform.ready().then(() => {
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();
    // });
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Chat",
        url   : "/chat",
        icon  : "chatboxes"
      },
      {
        title : "Contacts",
        url   : "/contacts",
        icon  : "contacts"
      },
    ]
  }
}
