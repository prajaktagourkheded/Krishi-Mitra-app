import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup} from '@angular/forms';
import {CropService} from '../services/crop.service';
import  {Router ,ActivatedRoute}  from '@angular/router';   
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    uname: new FormControl(),
    pwd : new FormControl()
});
Request : any =[];
users:any = [];
showdanger : boolean ;
  constructor(private fbd: CropService , private router : Router) { 
    
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers()
  {
    this.fbd. getuser().subscribe(success => {
      this.users = snapshottoarray(success);
      console.log(this.users);
    })
  }

gologin(){
     let flag = false;
    this.users.forEach(us => {
               const m = this.loginForm.value.uname;
               const p = this.loginForm.value.pwd;
               const mobile = us.uname;
               const pwd = us.password;
      if(m == mobile  && p == pwd )
      {
        this.showdanger = false ; 
        alert("Login Successful");
        localStorage.setItem("uid",us.key);
        flag = true;
        this.loginForm.reset();
        this.router.navigate(['/profile'] , {queryParams  : { data : m}});
      }
    });
    if(flag == false) 
    this.showdanger = true ;
    this.loginForm.reset();
}


}
var snapshottoarray = function(snapshot){
  let returnarr = [];
  snapshot.forEach(elem => {
    let obj = elem.payload.val();
    obj.key = elem.key;
    returnarr.push(obj);
  })
  return returnarr;
}


