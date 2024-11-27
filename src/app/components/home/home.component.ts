import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../services/slider.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  sliderImages:any=[];

  constructor(private getImages:SliderService){}
  getSliderImages(){
    this.getImages.getSiderImages().subscribe((data)=>{
      this.sliderImages=data;
      console.log(this.sliderImages);
    })
  }
  ngOnInit(): void {
    this.getSliderImages();
  }
}
