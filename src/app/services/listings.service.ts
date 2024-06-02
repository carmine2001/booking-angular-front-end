import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IListingData } from '../models/listings.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http:HttpClient) { }

  private server:string = environment.SERVER;

  getFilteredListings(params:any):Observable<IListingData>{
    return this.http.get<IListingData>(this.server + "/listings", { params });
  }
}
