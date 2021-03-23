import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css'],
})
export class ColorUpdateComponent implements OnInit, OnChanges {
  @Input() color: Color;
  @Output() updated = new EventEmitter();
  colorUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService: ColorService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.setFormValues();
  }

  ngOnInit(): void {
    this.createColorUpdateForm();
  }

  setFormValues() {
    if (this.color) {
      this.colorUpdateForm.setValue({
        colorId: this.color.colorId,
        colorName: this.color.colorName,
      });
    }
  }

  update() {
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({}, this.colorUpdateForm.value);
      console.log(colorModel);
      this.colorService.update(colorModel).subscribe(
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

  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      colorId: ['', Validators.required],
      colorName: ['', Validators.required],
    });
  }
}
