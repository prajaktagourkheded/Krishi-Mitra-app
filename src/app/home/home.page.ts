import { Component , OnInit , ViewChildren} from '@angular/core';
import { Router } from '@angular/router';
import {IonSlides} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChildren('mySlider') slider: IonSlides;
    sliderOpts = {
        autoplay: true,
        speed: 800,
        zoom: {
          maxRatio: 5
        }
      };

teams : string ;
a : null;
  constructor(private router : Router) {}

 ngOnInit() {
  }

 navi(){
    console.log("jahjgadsgas");
  }
  
  yourSearchFunction(a){
    console.log("Search : " + a);
    this.router.navigate(['./home1'] , {queryParams  : { data : a}});
    
  
  }
}

