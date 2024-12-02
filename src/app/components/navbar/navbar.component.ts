import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterOutlet } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  categoryList:any=[]=[]
  constructor(private auth:AuthService, private getCourseCategories:CourseService){}
  logout(){
    this.auth.logout()
  }

  // getCourseCategoryList(){
  //   this.getCourseCategories.getcourses((data:any)=>{
  //     this.categoryList=data.filter((category:any)=>{
  //       return category.category;
  //     })
  //   })
  // }
  getCourseCategoryList() {
    this.getCourseCategories.getcourses((data: any) => {
      this.categoryList = [...new Set(data.map((course: any) => course.category))];
    });
  }



  ngOnInit(): void {
    this.getCourseCategoryList();
  }
}
