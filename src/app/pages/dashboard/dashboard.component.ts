import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { Router } from '@angular/router';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,

  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class DashboardComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  // firstFormGroup = this.fb.group({
  //   firstFormGroup = this.fb.group({
  //     userName: [''],
  //     password: [''],
  //     confirmPassword: [''],
  //     email: [''],
  //     phoneNumber: [''],
  //     date: [''],
  //     country: [''],
  //     city: [''],
  //     state: [''],
  //     postalCode: ['']
   
  //   });
  // });
  // secondFormGroup = this.fb.group({
  //   secondCtrl: ['', Validators.required],

    
  // });

  // thirdFormGroup = this.fb.group({
  //   thirdCtrl: ['', Validators.required],

    
  // });
  // fourthFormGroup = this.fb.group({
  //   fourthCtrl: ['', Validators.required],

    
  // });
  isLinear = false;
  // registrationForm: FormGroup; 
  // professionalExperience: FormGroup;

  title = 'my-app';
  constructor(private fb: FormBuilder,private router:Router) {
    this.firstFormGroup = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      experienceInYears: ['', Validators.required],
      previousOrgName: ['', Validators.required],
      domain: ['', Validators.required],
      technologiesCovered: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.thirdFormGroup = this.fb.group({
     
    });
    this.fourthFormGroup = this.fb.group({
      // Add necessary form controls
    });
  }
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

  onSubmit1(){
    console.log(this.firstFormGroup.value);
  }
  onSubmit2(){
    console.log(this.secondFormGroup.value);
    
  }
  onSubmit3(){
    console.log(this.thirdFormGroup.value);
    
  }
  onSubmit(){
    if(this.firstFormGroup.valid && this.secondFormGroup.valid){
      console.log("data is submitted successfully");
    }
    else{
      console.log("Plese Enter All Details, Check Some Fields Are Empty ");
      
    }
    this.router.navigate(['/login'])
  
  }

  
}

