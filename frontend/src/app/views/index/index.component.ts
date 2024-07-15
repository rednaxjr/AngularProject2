import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MaterialModule } from '../../shared/material.module';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule , Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,

  ) {
   
  }


  ngOnInit(): void {
    this.testt();
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
}
