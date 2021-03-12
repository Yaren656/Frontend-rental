import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentalDtoResponseModel } from 'src/app/models/rentalDtoResponseModel';
import { RentalResponseModel } from 'src/app/models/rentalResponseModel';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  rentalDtos:RentalDto[]=[];
  dataLoaded = false ;
  
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    
    this.getRentalDetails();
  }


  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data
      this.dataLoaded = true;
    })
  }

  getRentalDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentalDtos= response.data
      console.log("test")
      this.dataLoaded = true;
    })
    
  }
  
}
