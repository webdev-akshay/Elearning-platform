import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent implements OnInit{
  user={
    name:'',
    password:'',
    age:''
  }
  constructor(private userService:UserService){}
  createNewUser(){
    this.userService.createUser(this.user).subscribe({
      next: (isValid)=>{
        if(isValid){
          alert("User created successfully")
        }else[
          alert("Invalid User name and passoword")
        ]
      },
      error: (error)=>{
        console.log("asdaddas",error)
      }
    })
  }
  ngOnInit(): void {

  }

}
