import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IHotels } from './hotels.interface';
import { HOTELS, FILTERS } from './hotels';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  public dataHotels: IHotels[];
  public selectedHotel: IHotels;
  public filter: string;
  public filterTypes: string[];
  @Output() changeHotel = new EventEmitter<IHotels>();

  constructor() { }

  public onCardClicked(data: IHotels){
    this.selectedHotel = data;
    this.emitData();
  }

  ngOnInit() {
    this.dataHotels = HOTELS;
    this.selectedHotel = HOTELS[0];
    this.emitData();
    this.filterTypes = FILTERS;
    this.filter = this.filterTypes[0];
  }

  private emitData(){
    this.changeHotel.emit(this.selectedHotel);
  }

  public applyHotelFilter(event: MouseEvent, type: string ){
    event.preventDefault();
    this.filter = type;
  }
}
