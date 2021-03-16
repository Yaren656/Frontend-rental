import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { Image } from 'src/app/models/image';
import { CardtoService } from 'src/app/services/cardto.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {

  cardto: CarDto;
  dataLoaded=false;
  carimages:Image[]=[];
  constructor(private cardtoService:CardtoService, private activatedRoute:ActivatedRoute,private imageService:ImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        setTimeout(()=>{
          this.getCarDetailsByCarid(params["carId"])
          this.getCarImagesByCarid(params["carId"]);
        },2000);
        //settimeout 2. parametre kadar bekler sonra içerisini çalıştırır
        //setinterval her verilen saniyede işlemi tekrar eder
      }
    })
    
  }

  getCarDetailsByCarid(carId:number){
    this.cardtoService.getCarDetailsByCarid(carId).subscribe(response=>{
      this.cardto = response.data[0]
      
    })
  }

  getCarImagesByCarid(carId:number){
    this.imageService.getImagesByCarid(carId).subscribe(response=>{
      this.carimages = response.data
      console.log(response.data[0])
    })
    this.dataLoaded=true;

  }



}
