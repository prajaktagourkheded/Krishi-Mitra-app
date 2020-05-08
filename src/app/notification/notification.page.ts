import { Component, OnInit } from '@angular/core';
import { CropService} from '../services/crop.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notification : any ;

  constructor(private fbd : CropService) { }
  getall(){    
    this.fbd.getNotification().subscribe(success => {
              this.notification= snapshotToArray(success);
               
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