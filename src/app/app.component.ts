import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentServiceService } from './Services/student-service.service';
import { WeatherService } from './Services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  //vars
  students:any = [];
  galwayWeather:any = [];
  temp:string = "";
  // custom location var
  selectedWeather:any = [];
  selectedTemp:string = "";
  locationSelected:string = "";
  customSubscription:any;

  constructor(private studentService:StudentServiceService, private WeatherService:WeatherService){

  }

  ngOnInit(): void {
    this.studentService.GetStudentData().subscribe(
      (data) => {
        this.students = data.students;
      }
    );

    // this.WeatherService.GetWeatherData().subscribe(
    //   (data) => {
    //     this.galwayWeather = data.weather;
    //     this.temp = data.main.temp
    //   }
    // );
    this.customSubscription = this.WeatherService.GetCustomWeatherData(this.locationSelected).subscribe(
      (data) => {
        this.selectedWeather = data.weather;
        this.selectedTemp = data.main.temp
      }
    );
  }

  // on focus of text box
  onInputFocused(): void
  {
    // unsubscribe from old data
    this.customSubscription.unsubscribe();
    
    // subscribing with new data
    console.warn("run");
    
    this.customSubscription = this.WeatherService.GetCustomWeatherData(this.locationSelected).subscribe(
      (data) => {
        this.selectedWeather = data.weather;
        this.selectedTemp = data.main.temp
      }
    );
  }
}
