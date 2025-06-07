import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesServiceComponent } from '../../service/cources.service';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  category: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
   courcesData = [];
  constructor(private cService:CoursesServiceComponent){

  }
  ngOnInit(): void {
   this.cService.getCources().subscribe((data)=>{
    console.log("data",data)
       this.courcesData = JSON.parse(JSON.stringify(data))
       
    })
  }

}