import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FakeCard } from 'src/app/models/fakeCard';
import { Rental } from 'src/app/models/rental';
import { FakecardService } from 'src/app/services/fakecard.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css'],
})
export class CreditcardComponent implements OnInit {
  @Input() rental: Rental;
  creditCardForm: FormGroup;
  nameOnTheCard: string;
  cardNumber: string;
  cardCvv: string;
  cvv:string;
  kartnumarasi:string;
  isim:string;
  fakeCard: FakeCard;
  cardExist: Boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fakeCardService: FakecardService,
    private rentalService: RentalService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.creditCardForm = new FormGroup({
      nameOnTheCard: new FormControl(null, [Validators.required]),
      cardNumber: new FormControl(null, [Validators.required]),
      cardCvv: new FormControl(null, [Validators.required]),
    });
  }
  async rentACar() {
    console.log(this.rental)
    let fakeCardModel = Object.assign({}, this.creditCardForm.value);
    this.cardExist = await this.isCardExist(fakeCardModel);
    if (this.cardExist) {
      this.fakeCard = await this.getFakeCardByCardNumber(this.cardNumber);
      this.rentalService.addRental(this.rental).subscribe(
        (response) => {
          if (response.success) {
            this.toastrService.success(response.message, 'Işlem başarılı');
          } else {
            this.toastrService.error(response.message, 'Kart bulunamadı');
          }
        },
        () => {
          this.toastrService.error(
            'Bağlanırken bir hata oldu',
            'Bağlantı hatası'
          );
        }
      );
    }
  }

  async isCardExist(fakeCard: FakeCard) {
    return (await this.fakeCardService.isCardExist(fakeCard).toPromise())
      .success;
  }

  async getFakeCardByCardNumber(cardNumber: string) {
    return (await this.fakeCardService.getCardByNumber(cardNumber).toPromise())
      .data[0];
  }

  updateCard(fakeCard: FakeCard) {
    this.fakeCardService.updateCard(fakeCard);
  }

  addPayment(){
    let fakeCard:FakeCard={
      nameOnTheCard:this.isim,
      cardNumber:this.kartnumarasi,
      cardCvv:this.cvv,
      moneyInTheCard:100
      
    }
    this.fakeCardService.addPayment(fakeCard).subscribe(response=>{
      this.toastrService.success('Işlem başarılı');
    })
  }
}
