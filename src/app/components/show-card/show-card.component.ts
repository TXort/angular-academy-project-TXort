import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent  {

  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() averageRating: number | undefined;
  @Input() imageUrl: string | undefined;

  

}
