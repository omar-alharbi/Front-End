import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterPayload } from './register-payload';
import { AuthService } from '../auth/auth.service';
import { Roles } from '../Roles/roles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent implements OnInit {

  registerForm:FormGroup  ;
  registerPayload: RegisterPayload;



  constructor(private formBuilder:FormBuilder, private authService: AuthService, private router:Router ) {
    this.registerForm = this.formBuilder.group({
      userName: '',
      fullName: '',
      dob: '',
      email: '',
      password: '',
      nationalID: '',
      phoneNumber: '',
      auth: "ROLE_USER"
  
    });
    this.registerPayload = {
      userName: '',
      fullName: '',
      dob: '',
      email: '',
      password: '',
      nationalID: '',
      phoneNumber: '',
      auth: "ROLE_USER"

    };

   }

  ngOnInit() {
  }

  onSubmit (){
    this.registerPayload.userName = this.registerForm.get('userName').value;
   this.registerPayload.fullName = this.registerForm.get('fullName').value;
   this.registerPayload.dob = this.registerForm.get('dob').value;
   this.registerPayload.email = this.registerForm.get('email').value;
   this.registerPayload.password = this.registerForm.get('password').value;
   this.registerPayload.nationalID = this.registerForm.get('nationalID').value;
   this.registerPayload.phoneNumber = this.registerForm.get('phoneNumber').value;




   this.authService.register(this.registerPayload).subscribe( data => {
     console.log('register succes');
     this.router.navigateByUrl('/register-seuccefull')
   }, error => {
     console.log('reigster failed');
   });
  }

}
