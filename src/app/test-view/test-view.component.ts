import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';
import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.css']
})
export class TestViewComponent implements OnInit {

  questionsData = [];
  viewQuestionsData: any;
  constructor(private ajaxService: AjaxService,private notifyService : NotificationService,private router: Router) { }
  questionCount: number = 0;

  ngOnInit(): void {
    this.ajaxService.getMethod("api/questionsByTestName?quizTitle=test1").subscribe(
      data =>{
        console.log(data);
        this.questionsData = Object.values(data);
        console.log(" this.questionsData : ", this.questionsData);
        this.viewQuestionsData = this.questionsData[this.questionCount];
        console.log(" this.viewQuestionsData : ", this.viewQuestionsData);
      },error=>{
        console.log(error);
        
      }
    )
  }

  nextQuestion(){
    this.questionCount = this.questionCount+1;
    if(this.questionCount <= this.questionsData.length)
    this.viewQuestionsData = this.questionsData[this.questionCount];
    else
    console.log("data completed");
    
  }

  prevQuestion(){
    this.questionCount = this.questionCount-1;
    if(this.questionCount !== 0)
    this.viewQuestionsData = this.questionsData[this.questionCount];
    else
    console.log("inddx zer");
    
  }

  showToasterSuccess(){
    this.notifyService.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
}

showToasterError(){
    this.notifyService.showError("Something is wrong", "ItSolutionStuff.com")
}

showToasterInfo(){
    this.notifyService.showInfo("This is info", "ItSolutionStuff.com")
}

showToasterWarning(){
    this.notifyService.showWarning("This is warning", "ItSolutionStuff.com")
}


submitQuestion(){
  console.log("submitQuestion");
  this.router.navigate(['/score'])
  
}


onCheckboxChange(value){
  console.log(" Value is : ", value );
}

}
