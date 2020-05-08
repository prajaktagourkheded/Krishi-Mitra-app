import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Platform } from '@ionic/angular'
import { from } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  place : string;
  type : string;
  icon : any;
  temperature : any;
  temperaturedata: any;
  country: any;
  humidity: any;
  pressure : any;
  windspeed : any;

  constructor(public httpClient : HttpClient, public geolocation : Geolocation, public platform : Platform) { 
    this.platform.ready().then(()=>{
      this.getCurrentLocation();
    })
  }

  ngOnInit() {
  }

  getCurrentLocation(){
    this.geolocation.getCurrentPosition().then((position)=>{
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      this.getCurrentTemperature(latitude, longitude);
    })
  }

  getCurrentTemperature(latitude, longitude){
        var url = "https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=fe1cb494ead761cbd6704f0daa7e3fd2";
    this.httpClient.get(url).subscribe((temperaturedata)=>{
      var list = <any>temperaturedata;
      this.place = list.name;
      this.country =list.sys.country;
      this.type = list.weather[0].description;
      this.humidity = list.main.humidity;
      this.pressure = list.main.pressure;
      this.windspeed = list.wind.speed;
      this.icon = "http://openweathermap.org/img/w/"+list.weather[0].icon+".png";
      this.temperature=((parseFloat(list.main.temp_min)-273.15).toFixed(2)).toString()+" °C";
    })
  }

}
