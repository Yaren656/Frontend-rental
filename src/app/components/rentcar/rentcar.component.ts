import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CarService } from 'src/app/services/car.service';
import { CarDto } from 'src/app/models/carDto';
import { Rental } from 'src/app/models/rental';

@Component({
  selector: 'app-rentcar',
  templateUrl: './rentcar.component.html',
  styleUrls: ['./rentcar.component.css'],
  providers: [DatePipe],
})
export class RentcarComponent implements OnInit {
  cardto!: CarDto;
  rental: Rental;
  baslangicTarihi: Date;
  isRentDateSelected: boolean = false;
  bitisTarihi: Date;
  totalDay: number;
  carId: number;
  today: string;
  endMinDate: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private carService: CarService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCar(params['carId']);
    });
    this.setDates();
  }
  rent() {
    this.rental = {
      carId: this.cardto.carId,
      customerId: 1,
      rentDate: this.baslangicTarihi,
      returnDate: this.bitisTarihi,
      totalRentPrice: this.totalDay*this.cardto.dailyPrice,
      Id:0
    };
  }
  getCar(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      console.log(response.data);
      this.cardto = response.data;
      console.log(this.cardto);
    });
  }
  setDates() {
    this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.endMinDate = this.today;
  }
  getStartDate(tarih: any) {
    this.isRentDateSelected = true;
    this.baslangicTarihi = new Date(tarih.target.value);
    let minEndDate = new Date(+this.baslangicTarihi + 1000 * 60 * 60 * 24);
    console.log('başlangıç tarihi =' + this.baslangicTarihi);
    console.log('endmindDate = ' + minEndDate);
    this.endMinDate = this.datePipe.transform(minEndDate, 'yyyy-MM-dd');
  }
  getEndDate(tarih: any) {
    this.bitisTarihi = new Date(tarih.target.value);
    let fark = this.bitisTarihi.getTime() - +this.baslangicTarihi.getTime();
    this.totalDay = fark / (1000 * 60 * 60 * 24);
  }
  // calculateDate() {
  //   var date1, date2;
  //   //define two date object variables with dates inside it
  //   date1 = new Date();
  //   date2 = new Date();

  //   //calculate time difference
  //   var time_difference = date2.getTime() - date1.getTime();

  //   //calculate days difference by dividing total milliseconds in a day
  //   var days_difference = time_difference / (1000 * 60 * 60 * 24);
  // }
}
