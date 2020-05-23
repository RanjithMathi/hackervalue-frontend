import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  testModel = new Tests();
  constructor(private router: Router,private ajaxService: AjaxService) { }

  ngOnInit(): void {
    this.getAllTests();
  }

  settings = {
    actions: {
      // custom: [
      //   {
      //     name: 'yourAction',
      //     title: '<i class="ion-document" title="YourAction"></i>'
      //   },
      //   {
      //     name: 'editAction',
      //     title: '<i class="ion-edit" title="Edit"></i>'
      //   },
      //   {
      //     name: 'deleteAction',
      //     title: '<i class="far fa-trash-alt" title="delete"></i>'
      //   }
      // ],
      add: true,
      
      edit: true,
      delete: true
    },
    add:{
      confirmCreate:true
     },
    columns: {
      // id: {
      //   title: 'Id',
      //   width:'10%',
      //   filter:false
      // },
      name: {
        title: 'Test Name'
      },
      createdBy: {
        title: 'Created By'
      },
      createdDate: {
        title: 'Created Date'
      }
    }
  };
  
  data = [ ];
  onUserRowSelect(event): void {
    this.router.navigate(['/tests/view-questions/'+event.data.name])
    console.log(event);
}

getAllTests(){
  this.ajaxService.getMethod("api/getAllTest").subscribe(
    data=>{
console.log("data : ",data);
this.data = Object.values(data);
    },error=>{
      console.log("error : ",error);

    }
  )
}

addRecord(event){
console.log("event :",event.newData);

this.testModel.name = event.newData.name;
this.testModel.createdBy = event.newData.createdBy;
this.testModel.createdDate = event.newData.createdDate;



this.ajaxService.postMethod("api/addTest",this.testModel).subscribe(
  data=>{
console.log("data : ",data);

  },error=>{
console.log("error : ",error);

  }
)

event.confirm.resolve(event.newData);
}

}


export class Tests{
  constructor(){}
  public name: string;
  public createdBy: string;
  public createdDate: Date;
  
}