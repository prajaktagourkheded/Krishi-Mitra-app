import { Component, OnInit } from '@angular/core';
import {CropService} from '../services/crop.service';

@Component({
  selector: 'app-fertilizer',
  templateUrl: './fertilizer.page.html',
  styleUrls: ['./fertilizer.page.scss'],
})
export class FertilizerPage implements OnInit {

  fer : any =[];
  constructor( private fbd: CropService) { }

  getall(){    
    this.fbd.getFer().subscribe(success => {
              this.fer = snapshotToArray(success);
               console.log(this.fer);
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


