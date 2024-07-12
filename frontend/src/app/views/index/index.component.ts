import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
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
    this.userService.test(data).subscribe((res: any) => {

      console.log(res)
    }, (error) => {
      console.log(error)
    })
  }
}
