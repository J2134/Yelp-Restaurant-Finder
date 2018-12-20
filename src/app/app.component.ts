import { Component } from '@angular/core';
import { YelpService } from "./yelp.service";
import { Restaurant } from "./restaurant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yelpapi';
  restaurant: any;
  rating: string;
  delivery: string;

  constructor(private yelpService: YelpService) {}

  getRestaurant(price: number, city: string, state: string): void {
    this.yelpService.getRestaurant({ price, city, state } as Restaurant).subscribe(data => {
      let result = data.businesses[Math.floor(Math.random() * 20)];
      let delivers = result.transactions.indexOf("delivery");
      delivers > -1
        ? (this.delivery = "Delivers")
        : (this.delivery = "Doesn't deliver");
      this.restaurant = result;
    });
  }
}
