import { Component, OnInit } from '@angular/core';
import { CropService} from '../services/crop.service';
import { AngularFireModule } from '@angular/fire';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
crop : any = [];
p : any;
snapshotToArray: any;
url1 : any ;
show : boolean ; 


  constructor(private Cser : CropService ,private route : ActivatedRoute) { }
  getall( p){
    this.Cser.getcropDetails().subscribe(
      success=>{ this.crop = snapshotToArray(success);               
                  this.crop = this.crop.filter(x =>    
                    x.name.toLowerCase( ) == this.p);
                  console.log(this.crop);
                  this.show = false ;
                  
                },
      error => { console.log(error);
        this.show = true ;}
              
    );
    
  }

  ngOnInit() {
    
    this.route.queryParams.subscribe(params =>{
             this.p = params.data.toLowerCase();
             console.log("params :" + this.p);
              }  
      )    
      this.getall(this.p);
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
