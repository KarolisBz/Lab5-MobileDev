import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient:HttpClient) { }

  GetWeatherData():Observable<any> {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  }

  GetCustomWeatherData(locationSelected:string):Observable<any> {
    let appendedAPI:string = "https://api.openweathermap.org/data/2.5/weather?q=" + locationSelected +"&appid=6a66416403ed8e5e6e762cb8c261f303";
    console.log(appendedAPI)
    return this.httpClient.get(appendedAPI);
  }
}
