import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  cardtos: CarDto[] = [];
  colors : Color []=[];
  dataLoaded = false;
  filterText="";
  selectedColorId:number;
  selectedBrandId:number;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCarDetails()
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
    
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.cardtos = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cardtos = response.data;
      console.log(response.data)
      this.dataLoaded = true;
    });
  }


  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cardtos = response.data;
      this.dataLoaded = true;
    });
  }

  addToCart(cardto:CarDto){
    this.toastrService.success("Added to Cart", cardto.brandName + " " + cardto.description)
    this.cartService.addToCart(cardto);
  }

  getColorId(colorId:number){
    this.selectedColorId=colorId;
    console.log("İçeriden gelen değer : " + this.selectedColorId);
  }

  getBrandId(brandId:number){
    this.selectedBrandId=brandId;
    console.log("İçeriden gelen değer(brand) : " + this.selectedBrandId);
  }

  doFilter(){
    // if(!this.selectedBrandId || !this.selectedColorId){
    //   return;
    // }
    this.carService.doFilter(this.selectedColorId, this.selectedBrandId).subscribe(response=>{
      this.cardtos=response.data;
    })
  }
}
