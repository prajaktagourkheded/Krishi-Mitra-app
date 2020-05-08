import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  
  }

pass(a){
  console.log(a);
  this.router.navigate(['./question/display'] , {queryParams : { data : a}});
}
}
