import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl }from '@angular/forms';
import {CropService} from '../../services/crop.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  questions :any = [];
  p : any = [];

  qweatherForm = new FormGroup({
    que : new FormControl()
});

  constructor(private fbd: CropService , private route : ActivatedRoute) { 
    
  }
  getall(p){    
    this.fbd.getQuestion(p).subscribe(success => {
              this.questions = snapshotToArray(success);
               console.log(this.questions);
             },
               error=>{console.log(error);}                                          
               );}
  ngOnInit() {
   
     this.route.queryParams.subscribe(params =>{
      this.p = params.data;
      console.log( "Params " + params.data);
      this.getall(this.p);
    }

  
      )
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
