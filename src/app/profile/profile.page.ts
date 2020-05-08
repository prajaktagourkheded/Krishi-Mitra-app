import { Component, OnInit } from '@angular/core';
import { CropService} from '../services/crop.service';
import {ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  p : any;
  item : any = [];
  constructor(private route : ActivatedRoute , private Cser : CropService, private router : Router ) { }
  getall( p){
    this.Cser.getuser().subscribe(
      success=>{ this.item = snapshotToArray(success);               
                  this.item= this.item.filter(x =>     x.uname == this.p);
                   
                  console.log(this.item);
                 
                },
      error => { console.log(error);}
              
    );
  }


  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      this.p = params.data;
      console.log("params :" + this.p);
       }  
      )    
    this.getall(this.p);
    this.router.navigate(['/home'] , {queryParams  : { data1 : this.p}});
  }

}
const snapshotToArray = function(snapshot){
  let returnArr: any = [];
  snapshot.forEach(element => {
    let obj : any = {};
    obj = element.payload.val();
    obj.key = element.key;
    returnArr.push(obj);
  });
    return returnArr;
  }