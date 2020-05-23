import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
answerAdded: string;
choicesAdded: string;
testNames = [];
  constructor(private ajaxService: AjaxService) { }

  ngOnInit(): void {
    this.getAllTests();
    this.model.quizTitle = "Please select quiz title";
  }
 model = new QuestionModel();

//  {"quizTitle":"test1","duration":"90","questionLines":"ygygyggy\nhihihihi","questions":"y78y7y7\n8y8y8y\n8y8yy8","choices":["777t7t7t","yyy8y8"],"answer":["uiiiii","uiiii"]}


  onSubmit(){
    console.log("mde : ",this.model );



    if(this.answerAdded){
      this.model.answer.push(this.answerAdded);
    }

    if(this.choicesAdded){
      this.model.choices.push(this.choicesAdded);
    }

    this.ajaxService.postMethod("api/insertDetails",this.model).subscribe(
      data=>{
console.log("datat : ",data);

      },error=>{
console.log("error : ",error);

      }
    )

  }

  addAnswer(){
    console.log("fvfvfv",this.answerAdded);
    this.model.answer.push(this.answerAdded);
    this.answerAdded = "";
  }

  addChoice(){
    console.log("fvfvfv",this.choicesAdded);
    this.model.choices.push(this.choicesAdded);
    this.choicesAdded = "";
    
  }

  getAllTests(){
    this.ajaxService.getMethod("api/getAllTest").subscribe(
      data=>{
  console.log("data : ",data);
  this.testNames = Object.values(data);
      },error=>{
        console.log("error : ",error);
  
      }
    )
  }

}

export class QuestionModel {
  constructor(){}
  public quizTitle: string;

  public duration: string;
  public questionLines: string;
  public questions: string;

  public choices: string[] =[];
  public answer: string[] = [];
}