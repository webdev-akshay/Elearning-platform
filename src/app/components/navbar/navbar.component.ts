import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterOutlet } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  categories: any[] = [];
  openDropBox:boolean=false;
  constructor(private auth:AuthService, private courseService: CourseService){}
  logout(){
    this.auth.logout()
  }

  openDropdown(){
    this.openDropBox=!this.openDropBox
  }
 getCategories(){
  this.courseService.getcourses().subscribe((data)=>{
    this.categories=data;
  })
 }



  ngOnInit(): void {
    this.getCategories()
  }


}
