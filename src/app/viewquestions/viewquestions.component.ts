import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewquestions',
  templateUrl: './viewquestions.component.html',
  styleUrls: ['./viewquestions.component.css']
})
export class ViewquestionsComponent implements OnInit {
  public questionsData = [];
  collection = [];
  testname : string;
  totalRec : number;
  page: number = 1;
  constructor(private ajaxService: AjaxService,private route: ActivatedRoute) {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
   }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      console.log(params['testName']);
      this.testname = params['testName'];
  });
    // http://localhost:8181/test1
    this.ajaxService.getMethod("api/questionsByTestName?quizTitle="+this.testname).subscribe(
      (data: any[])=>{
        this.questionsData = data;
        this.totalRec = this.questionsData  .length;

      console.log(data);
    }) 

  }

   

}
