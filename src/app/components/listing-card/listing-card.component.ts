import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IListing } from '../../models/listings.interface';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrl: './listing-card.component.css'
})
export class ListingCardComponent implements OnInit{

  constructor(){}

  @Input() listing?:IListing;
  @Output() country:EventEmitter<string> = new EventEmitter();

  convertStringToNumber(string:string){
    return parseInt(string);
  }

  ngOnInit(): void {
    if(this.listing){
      this.country.emit(this.listing.address.country);
    }
  }

}
