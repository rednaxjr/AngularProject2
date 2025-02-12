import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-testcrud',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, FormsModule,],
  templateUrl: './testcrud.component.html',
  styleUrl: './testcrud.component.css'
})


export class TestcrudComponent implements OnInit {

  constructor(
    private userService: UserService,
    private route: Router,

  ) {

  }
  dataId: any;
  datafname: string = "";
  datalname: string = "";
  dataemail: string = "";
  dataPassword: string = "";

  data = [];
  displayedColumns = ['fname', 'lname', 'posId', "action"];
  dataSource = new MatTableDataSource(this.data);

  updateAction(data: any) {
    console.log(data)
  }

  ngOnInit(): void {
    this.getAllUsers()
  }
  async getAllUsers() {
    console.log("aaa")
    const data = {
      name: "Sample"
    }
    this.userService.getAllUsers().subscribe((res: any) => {
      this.data = res.data;
      console.log(res)
    }, (error) => {
      console.log(error)
    })
  }
  async updateUser(data: any) {
    this.dataId = data.id;
    this.datafname = data.first_name;
    this.datalname = data.last_name;
    this.dataemail = data.email;
    this.dataPassword = data.password;
    console.log(data)
  }
 async  deleteUser(data: any) {
   await this.userService.deleteAccount(data.id).subscribe((res: any) => {

      console.log(res);
    }, (error) => {
      console.log(error);
    })
  }
  updateUserData() {
    this.userService.getAllUsers().subscribe((res: any) => {
      this.data = res.data;
      console.log(res)
    }, (error) => {
      console.log(error)
    });
  }
  deleteUserData() {

  }
}



