import { Component, OnInit } from '@angular/core';
import { IHotels } from './hotels.interface';
import { HOTELS } from './hotels';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  public dataHotels: IHotels[];
  constructor() { }

  ngOnInit() {
    this.dataHotels = HOTELS;
  }

}
