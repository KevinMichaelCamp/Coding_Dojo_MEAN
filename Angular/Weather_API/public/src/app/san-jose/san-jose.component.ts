import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  weatherData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const weather = this.http.get('https://api.openweathermap.org/data/2.5/weather?id=5392171&appid=8a9feb7c238bb86175a7ffbfb74c1356');
    weather.subscribe(data => {
      console.log(data);
      this.weatherData = data;
      this.weatherData.humidity = data['main'].humidity;
      this.weatherData.temp = Math.round(((9 / 5) * data['main'].temp) - 459.67);
      this.weatherData.low = Math.round(((9 / 5) * data['main'].temp_min) - 459.67);
      this.weatherData.high = Math.round(((9 / 5) * data['main'].temp_max) - 459.67);
      this.weatherData.weather = data['weather'][0]['main'];
    });
  }

}
