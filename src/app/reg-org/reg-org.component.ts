import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterOrgPayload } from './register-org-payload';
import { AuthService } from '../auth/auth.service';
import { Roles } from '../Roles/roles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-org.component.html',
  styleUrls: ['./reg-org.component.css']
})
export class RegOrgComponent implements OnInit {

  registerForm:FormGroup  ;
  registerOrgPayload: RegisterOrgPayload;



  constructor(private formBuilder:FormBuilder, private authService: AuthService, private router:Router ) {
    this.registerForm = this.formBuilder.group({
      userName: '',
      fullName: '',
      email: '',
      password: '',
      auth: "ROLE_ORG"
  
    });
    this.registerOrgPayload = {
      userName: '',
      fullName: '',
      email: '',
      password: '',
      auth: "ROLE_ORG"

    };

   }

  ngOnInit() {
  }

  onSubmit (){
    this.registerOrgPayload.userName = this.registerForm.get('userName').value;
   this.registerOrgPayload.fullName = this.registerForm.get('fullName').value;
   this.registerOrgPayload.email = this.registerForm.get('email').value;
   this.registerOrgPayload.password = this.registerForm.get('password').value;




   this.authService.registerOrg(this.registerOrgPayload).subscribe( data => {
     console.log('register succes');
     this.router.navigateByUrl('/register-seuccefull')
   }, error => {
     console.log('reigster failed');
   });
  }

}
