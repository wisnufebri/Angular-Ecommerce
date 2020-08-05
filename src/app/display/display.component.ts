import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../_services/display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

displays: any;
currentDisplay = null;
currentIndex = -1;
nama = '';
stock = '';
harga = '';
description = '';
terjual = '';
berat = '';

  constructor(private displayService: DisplayService) { }

  ngOnInit(): void {
    this.retrieveDisplay();
  }

  retrieveDisplay(): void {
    this.displayService.getAll()
    .subscribe(
      data => {
        this.displays = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveDisplay();
    this.currentDisplay = null;
    this.currentIndex = -1;
  }

  setActiveDisplay(display, index): void {
    this.currentDisplay = display;
    this.currentIndex = index;
  }

}
