import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, from } from "rxjs";
import { catchError } from "rxjs/operators";
import { Restaurant } from "./restaurant";

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  private authKey =
  "Bearer 08eWRrb8oPxxqMUcKG4wJBwQp9RC_e_TcGviAbl6bKMXdnkbE9Z5GUWqMmULfgpQZRpuMZlFXLAY2pXNGjVTgPFEmgTRJV7svVlyHtqEZXUE_MsOl2G3TW12VcUbXHYx";
  private baseUrl =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?open_now=true&location=";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.authKey,
      "X-Requested-With": "application/xhtml+xml"
    })
  };

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http
      .get<any>(
        `${this.baseUrl}"${restaurant.city} ${restaurant.state}"&price=${restaurant.price}`,
        this.httpOptions
      )
      .pipe(catchError(this.handleError("getRestaurant", [])));

}
}
