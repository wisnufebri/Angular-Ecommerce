import { Component, OnInit } from '@angular/core';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes: any;
  currentHome = null;
  currentIndex = -1;
  nama = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private homeService: HomeService ) { }

  ngOnInit(): void {
    this.itemHome();
  }

  getRequestParams(searchNama, page, pageSize) {
    let params = {};

    if (searchNama) {
      params[`nama`] = searchNama;
    }

    if (page) {
      params[`page`] = page -1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  itemHome(){
    const params = this.getRequestParams
    (this.nama, this.page, this.pageSize);

    this.homeService.getAll(params)
    .subscribe(
      body => {
        const { homes, totalItems } = body;
        this.homes = homes;
        this.count = totalItems;
        console.log(body);
      }, 
      err => {
        console.log(err);
      });
  }

  handlePageChange(event){
    this.page = event;
    this.itemHome();
  }

  handlePageSizeChange(event){
    this.pageSize = event.target.value;
    this.page = 1;
    this.itemHome();
  }

  setActiveHome(home, index){
    this.currentHome = home;
    this.currentIndex = index;
  }
}
