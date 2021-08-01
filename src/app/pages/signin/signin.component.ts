import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }
  name= new FormControl('', 
    Validators.required
  );
  surname= new FormControl('',Validators.required);
  email= new FormControl('', [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]);
  password= new FormControl('', [Validators.required, Validators.minLength(5)]);
  passwordRepeat= new FormControl('', [Validators.required,Validators.minLength(5)]);
  pass = true;
  ngOnInit(): void {
   
  }

  onSignIn(){
    if (this.password.value != this.passwordRepeat.value){
      this.pass=false;
    }
  }

 


}
