import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {CropService} from '../services/crop.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  city: string[] = [
    'Nagpur', 'Mumbai', 'Pune', 'Aurangbad', 'Nashik', 'Amravati' , 'Kolhapur' , 'Akola' , 'Satara' 
  ];
  pwddanger : boolean ;
  signupForm= new FormGroup(
    {
      fname: new FormControl( '',Validators.required),
      lname : new FormControl('' ,Validators.required),
      mob: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(12) ]),
      uname: new FormControl('' ,Validators.required),
      aadhar: new FormControl('', [Validators.required,Validators.minLength(12),Validators.maxLength(12) ]),
      cityy: new FormControl('' ,Validators.required),
      gender: new FormControl('' ,Validators.required),
      password: new FormControl('',[Validators.required,Validators.minLength(7), Validators.maxLength(12)]),
      rpassword: new FormControl('' ,Validators.required)
    }  
  );

  constructor(private service : CropService , private router:Router) { }
user : any =[];
danger : boolean ;

 
  ngOnInit() {
  
  }
  add(){
  const  p = this.signupForm.value.password ;
  const r = this.signupForm.value.rpassword ;
    const f = this.signupForm.value.fname ;
    const l = this.signupForm.value.lname ;
    const m = this.signupForm.value.mob ;
    const u = this.signupForm.value.uname ;
    const a = this.signupForm.value.aadhar ;
    const c = this.signupForm.value.cityy ;
    const g = this.signupForm.value.gender ;
  
    if(p == r){
      this.pwddanger = false ; 
      this.danger = false ;
      this.service.addUser(this.signupForm.value).then(success => {
        console.log(success);
        this.router.navigate(['/login'])
        this.signupForm.reset();
      })

      alert("Signup successful !!");
      console.log(this.signupForm.value)
    }else{
      console.log(this.signupForm.value)
      this.pwddanger = true ; 
    }
    if(this.signupForm == null){
      this.danger = true ;
    }
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
