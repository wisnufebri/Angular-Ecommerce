import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../_services/item.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items = []
  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveItem();
  }


  retrieveItem() {
    this.itemService.getAll().subscribe(
      response => this.items = response,

      error => console.log(error)
    )
  }

  removeAllItem() {
    this.itemService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveItem();
        },
        error => {
          console.log(error);
        });
  }
}
