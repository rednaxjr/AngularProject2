import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MaterialModule } from '../../shared/material.module';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule , Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registrationForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private router: Router,
    private userService: UserService,

  ) {

  }

  ngOnInit(): void {
    console.log("aaa")
  }

  async testt() {
    console.log("Aaaaaaaaa")
  }
  async submit() {
    console.log("aaa")
    const data = {
      name: "Sample"
    }
    this.userService.test().subscribe((res: any) => {

      console.log(res)
    }, (error) => {
      console.log(error)
    })
  }
  async handleSubmit() {
    const data = {
      fname: this.registrationForm.value.fname,
      lname: this.registrationForm.value.lname,
      email: this.registrationForm.value.email,
      pass: this.registrationForm.value.password,
    }
    console.log(data)

    this.userService.registerAccount(data).subscribe((res: any) => {

      console.log(res)
    }, (error) => {
      console.log(error)
    })
    // alert( 
    //   this.registrationForm.value.name + ' | ' + this.registrationForm.value.email
    // );
  }
}
