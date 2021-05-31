import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService, QuestionService } from '@app/_services';
import { NavController , AlertController} from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.page.html',
  styleUrls: ['./mcq.page.scss'],
})
export class McqPage implements OnInit {
  // data: any;
  // @ViewChild('slides') slides: any;
  // hasAnswered: boolean = false;
 score: number = 0;
 currentQuestion = 0;

  // slideOptions: any;
  // questions: any;
  @ViewChild('slides') slides: any;

    slideOptions: any;
    flashCardFlipped: boolean = false;
    questionList: any = [];
    questions =[{
      questionid:1,
      question:"question one",
      options:[{id:1,opt: "A"},{id:2,opt: "B"}],
      questionImag:"../../assets/Taj.jpg",
      Answer:"A",
      userAnswer: "",
      isCorrect: false,
      color:""
    },{
      questionid:2,
      question:"Question Second",
      options:[{id:1,opt: "A"},{id:2,opt: "B"}],
      questionImag:"../../assets/Taj.jpg",
      Answer:"A",
      userAnswer: "",
      isCorrect: false,
      color:""
    },{
      questionid:3,
      question:"Question Third",
      options:[{id:1,opt: "A"},{id:2,opt: "B"}],
      questionImag:"../../assets/Taj.jpg",
      Answer:"A",
      userAnswer: "",
      isCorrect: false,
      color:""
    }];
  constructor(public navCtrl: NavController,
              private loginservice: LoginService,
              private alertController: AlertController,
              private router: Router,
              private  questionService: QuestionService) { }

  ngOnInit() {
    this.loadQuestionData();
  }
  
  loadQuestionData() {
    this.questionService.loadQuestionList(localStorage.getItem('subjectId'))
      .subscribe(
        (data: any) => {
          console.log(data);
          this.questionList= data;
        },
        (error: any) => {
          
        });
  }
nextQuestion(): void {
  this.currentQuestion++;
}
answer(optionid,answer,questionid) {
  this.questionList.forEach((ques:any) => {
    if(ques.questionDeatils.questionId ==questionid) {
      ques.questionDeatils.userAnswer =answer ;
      ques.questionDeatils.questionOption.forEach(option => {
        if(option.questionOptionId==optionid) {
          if(option.questionOption== answer && option.isAnswer) {
            option.color="success"
          } else {
            option.color="danger";
          }
        } else {
          option.color="";
        }
      });
    }
  });
}
prevQuestion(): void {
  this.currentQuestion--;
}
 async resetQuiz() {
  const alert = await this.alertController.create({
    // cssClass: 'surajkumar',
    // header: 'Confirm!',
    message: '<strong>Are you sure?</strong>',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'alertbutton',
        handler: (blah) => {
          
        }
      }, {
        text: 'Ok',
        cssClass: 'alertbutton',
        handler: () => {
          console.log('Confirm Okay');
          this.router.navigate(['subject']);
        }
      }
    ]
  });

  await alert.present();
  
}
}
