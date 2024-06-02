import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingCardComponent } from './listing-card.component';



@NgModule({
  declarations: [
    ListingCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListingCardComponent
  ]
})
export class ListingCardModule { }
