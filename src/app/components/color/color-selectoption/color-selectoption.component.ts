import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-selectoption',
  templateUrl: './color-selectoption.component.html',
  styleUrls: ['./color-selectoption.component.css']
})
export class ColorSelectoptionComponent implements OnInit {
  @Output() outputValue = new EventEmitter<number>();
  colors:Color[]=[];
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getAllColors();
  }

  getAllColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    })
  }
  secildi(renkId:any){renkId;
    this.outputValue.emit(renkId);
  }
}
