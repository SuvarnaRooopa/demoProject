import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn:"root"
})

export class CoursesServiceComponent {
    constructor(private http:HttpClient){

    }
    cources = [
    {
      "id": 1,
      "title": "Traditional Dance",
      "description": "Learn traditional dances from around the world",
      "instructor": "Maria Gonzalez",
      "duration": "8 weeks",
      "category": "Performing Arts"
    },
   {
      "id": 2,
      "title": "Traditional Dance",
      "description": "Learn traditional dances from around the world",
      "instructor": "Maria Gonzalez",
      "duration": "8 weeks",
      "category": "Performing Arts"
    },
    {
      "id": 3,
      "title": "Traditional Dance",
      "description": "Learn traditional dances from around the world",
      "instructor": "Maria Gonzalez",
      "duration": "8 weeks",
      "category": "Performing Arts"
    }
  ]

    getCources():Observable<any>{
        return of(this.cources)
    }
}

