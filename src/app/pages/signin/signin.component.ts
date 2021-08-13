import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import {Router} from "@angular/router"
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/internal/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {



  constructor(
    private restService: RestService,
    private router: Router,
    private toastr: ToastrService
    ) { }
  name= new FormControl('', 
    Validators.required
  );
  surname= new FormControl('',Validators.required);
  email= new FormControl('', [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]);
  password= new FormControl('', [Validators.required, Validators.minLength(5)]);
  passwordRepeat= new FormControl('', [Validators.required,Validators.minLength(5)]);
  pass = true;
  user_id = -1;
  ngOnInit(): void {
   
  }

  onSignIn(){
    if (this.password.value != this.passwordRepeat.value){
      this.pass=false;
    }
    else {
    const data = {
      email: this.email.value,
      password: this.password.value,
      firstName: this.name.value,
      lastName: this.surname.value
    };
    
    this.restService.singUp(data)
    .subscribe(
      response => {
        console.log(response);
        if (response != false)
      {
      this.router.navigate(['/login'])
      this.toastr.success('You signed up!');
      }
      else{
        this.toastr.error('You have to change email');
      }
      },
      (error) => {                              //Error callback
        this.toastr.error('Error!');
      }
    )
}
}
}
