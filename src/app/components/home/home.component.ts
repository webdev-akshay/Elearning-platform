import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../services/slider.service';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  sliderImages:any=[];
  courseList:any=[];
  categorisedCourseList:any=[];
  constructor(private getImages:SliderService, private courseDataList:CourseService){}
  getSliderImages(){
    this.getImages.getSiderImages().subscribe((data)=>{
      this.sliderImages=data;
      console.log(this.sliderImages);
    })
  }

  getcourseList(){
    this.courseDataList.getcourses().subscribe((data:any[])=>{
      this.courseList=data.filter((courses=>courses.rating > 4.5));
      console.log(this.courseList)
    })
  }
  getCoursewiseData(){
    this.courseDataList.getcourses().subscribe((data:any[])=>{
      this.categorisedCourseList=data.filter(courses=>courses.title)

    })

  }
  ngOnInit(): void {
    this.getSliderImages();
    this.getcourseList();
  }
}
