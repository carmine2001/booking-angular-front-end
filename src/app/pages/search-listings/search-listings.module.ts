import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListingsComponent } from './search-listings.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ListingCardModule } from '../../components/listing-card/listing-card.module';



@NgModule({
  declarations: [
    SearchListingsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListingCardModule,
    RouterModule.forChild([
      {
        path:"",
        component: SearchListingsComponent
      }
    ])
  ]
})
export class SearchListingsModule { }
