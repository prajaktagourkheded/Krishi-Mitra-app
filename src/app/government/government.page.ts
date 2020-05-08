import { Component, OnInit } from '@angular/core';
import {CropService} from '../services/crop.service';

@Component({
  selector: 'app-government',
  templateUrl: './government.page.html',
  styleUrls: ['./government.page.scss'],
})
export class GovernmentPage implements OnInit {
govern : any =[];
  constructor(private fbd: CropService) { }
  getall(){    
    this.fbd.getGov().subscribe(success => {
              this.govern = snapshotToArray(success);
               console.log(this.govern);
             },
               error=>{console.log(error);}                                          
               );}

  ngOnInit() {
    this.getall();
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

