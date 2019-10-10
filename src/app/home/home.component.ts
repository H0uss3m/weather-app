import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weatherData;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getWeatherData().subscribe(
      (data) => {
        console.log(data)
        this.weatherData = data
      },
      (error) => {
        console.log(error)
      },
      () => console.log('completed'))
  }

}
