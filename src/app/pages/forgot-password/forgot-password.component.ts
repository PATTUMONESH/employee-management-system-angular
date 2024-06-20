import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  forgotPasswordFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.forgotPasswordFormGroup =this.formBuilder.group({
      email: [''],
      newPassword: [''],
      confirmNewPassword:['']
    })
  }

}
