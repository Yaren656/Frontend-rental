import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  cardtos:CarDto[]=[];
  dataLoaded = false ;

  constructor(private carService:CarService) {}

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
 

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.cardtos = response.data
      this.dataLoaded = true;
        })
  }
}
