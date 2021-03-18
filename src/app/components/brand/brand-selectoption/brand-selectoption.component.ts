import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-selectoption',
  templateUrl: './brand-selectoption.component.html',
  styleUrls: ['./brand-selectoption.component.css']
})
export class BrandSelectoptionComponent implements OnInit {

  @Output() outputValue = new EventEmitter<number>();
  brands:Brand[]=[];

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }

  secildi(brandId:any){;
    this.outputValue.emit(brandId);
  }

}
