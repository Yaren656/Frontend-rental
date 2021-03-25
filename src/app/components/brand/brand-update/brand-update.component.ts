import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css'],
})
export class BrandUpdateComponent implements OnInit {
  @Input() brand: Brand;
  @Output() updated = new EventEmitter();
  // brands:Brand[]=[];
  // changedBrand!:Brand;
  brandUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setFormValues();
  }

  ngOnInit(): void {
    this.createBrandUpdateForm();
    // this.getBrands();
  }

  setFormValues() {
    if (this.brand) {
      this.brandUpdateForm.setValue({
        brandId: this.brand.brandId,
        brandName: this.brand.brandName,
      });
    }
  }

  update() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      console.log(brandModel);
      this.brandService.update(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Güncelleme Başarılı');
          this.updated.emit();
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Lütfen kontrol ediniz!');
    }
  }

  createBrandUpdateForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      brandName: ['', Validators.required],
    });
  }

  // getBrands(){
  //   this.brandService.getBrands().subscribe(response=>{
  //     this.brands=response.data;
  //   })
  // }

  // setChangedBrand(brand:Brand){
  //   this.changedBrand=brand;
  // }
}
