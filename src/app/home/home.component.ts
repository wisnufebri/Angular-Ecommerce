import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes = []
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveHome();
  }


  retrieveHome() {

    this.homeService.getAll().subscribe(
      response => this.homes = response,
      error => console.log(error)
    )
  }

  removeAllHome() {
    this.homeService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveHome();
        },
        error => {
          console.log(error);
        });
  }
}
