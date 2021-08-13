import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';
import {Router} from "@angular/router"
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(
    private restService: RestService,
    private router: Router,
    private toastr: ToastrService,
    private tokenStorage: TokenStorageService
  ) { }
  email= new FormControl('', Validators.required);
  password= new FormControl('', Validators.required);
  token: any ;
  isLoggedIn = false;
  isLoginFailed = false;

  ngOnInit(): void {
  }

  onLogIn(){
    const data = {
      email: this.email.value,
      password: this.password.value
    };
    this.restService.LogIn(data)
    .subscribe(
      response => {      
        if (response != false)
      {
      this.tokenStorage.saveToken(response.access_token);
      this.tokenStorage.saveUser(this.email.value);
      this.isLoginFailed = false;
      this.isLoggedIn = true;



      const token = response.access_token;
      this.router.navigate(['/main'])
      this.toastr.success('You log in!')
      this.token = token;
      console.log(this.token);
      }
      else{
        this.toastr.error('Wrong');
      }
      },
      (error) => {                  
        this.isLoginFailed = true;            //Error callback
        this.toastr.error('Wrong data!');
        
      }
    )
    
    
  }
  reloadPage(): void {
    window.location.reload();
  }

}
