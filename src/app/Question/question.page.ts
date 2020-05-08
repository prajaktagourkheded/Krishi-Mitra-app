import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl }from '@angular/forms';
import {CropService} from '../services/crop.service';
// import { element } from 'protractor';

// import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// import { Router,ActivatedRoute } from '@angular/router';
// import { QweatherService } from '../qweather.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  buttonString:string="Add";
  questions :any = [];
  
  qweatherForm = new FormGroup({
    que : new FormControl()
});

  constructor(private fbd: CropService) { 
 
  }
  // add(){
  //   this.fbd.addQuestion(this.qweatherForm.value);
  //    console.log("Data Successfully Added");
  // }
  
  // getall()
  // {
  //   this.fbd.addQuestion().subscribe(success => {
  //    this.questions = snapshotToArray(success);
  //    // this.questions = this.questions.filter(x => x.type === "question")
  //    console.log(this.questions);
  //   },
  //   error=>{
  //     console.log(error);
  //   }

  //   );
  //  }
    
  ngOnInit() {
    // this.getall();
  }

}
const snapshotToArray = function(snapshot){
  let returnArr:any=[];
  snapshot.forEach(element =>{ 
    let obj:any ={};
    obj= element.payload.val();
    obj.key=element.key;
    returnArr.push(obj);
  });
  return returnArr;
}
