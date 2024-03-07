import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentServiceService } from './Services/student-service.service';
import { WeatherService } from './Services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  students:any = [];
  galwayWeather:any = [];

  constructor(private studentService:StudentServiceService, private WeatherService:WeatherService){

  }

  ngOnInit(): void {
    this.studentService.GetStudentData().subscribe(
      (data) => {
        this.students = data.students;
      }
    );

    this.WeatherService.GetWeatherData().subscribe(
      (data) => {
        this.galwayWeather = data.weather;
      }
    );
  }
}
