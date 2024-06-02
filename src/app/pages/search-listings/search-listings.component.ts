import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListingsService } from '../../services/listings.service';
import { IListing, IListingData, ISearchListingsParams } from '../../models/listings.interface';

@Component({
  selector: 'app-search-listings',
  templateUrl: './search-listings.component.html',
  styleUrl: './search-listings.component.css'
})
export class SearchListingsComponent {

  listings?: IListing[];
  numeroStrutture?: number;
  country?: string;
  pages: Array<number> = [];
  paginator:number = 1;

  constructor(private listingsService: ListingsService, private cd: ChangeDetectorRef) { }

  searchForm = new FormGroup({
    search: new FormControl("", [Validators.required, Validators.minLength(2)])
  })

  

  onSearch() {
    const arrayPages:Array<number> = [];

    const params: ISearchListingsParams = {
      country: this.searchForm.value.search!,
      limit: 20,
      skip: 0
    }

    this.listingsService.getFilteredListings(params).subscribe((data: IListingData) => {
      this.listings = data.data;
      this.numeroStrutture = data.count;
      const pages:number = Math.ceil(data.count / params.limit);

      for (let i = 1; i <= pages; i++) {
      arrayPages.push(i);
      }
      this.pages = arrayPages;
    })

    this.paginator = 1;
  }


  onCountry(country: any) {
    this.country = country;
    this.cd.detectChanges();  /* forza i cambiamenti di country passati in event emitter da listing-card a search-listings */
  }

  onPaginator(){
    const skip = (this.paginator - 1) * 20;
    this.listingsService.getFilteredListings({
      country: this.searchForm.value.search,
      limit: 20,
      skip
    }).subscribe((data:IListingData) => {
      this.listings = data.data;
    });
  }

  onClickPage(page: number) {
    this.paginator = page;
    this.onPaginator();
  }

  avanti(){
    if(this.paginator < this.pages.length){
      this.paginator += 1;
      this.onPaginator();
    }
  }

  indietro(){
    if(this.paginator > 1){
      this.paginator-= 1;
      this.onPaginator();
    }
  }

}
