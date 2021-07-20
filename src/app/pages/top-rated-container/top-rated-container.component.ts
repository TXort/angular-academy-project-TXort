import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-top-rated-container',
  templateUrl: './top-rated-container.component.html',
  styleUrls: ['./top-rated-container.component.css']
})
export class TopRatedContainerComponent implements OnInit {

    public shows: Array<Show> = [];

    constructor(private showService: ShowService) {}
  
    ngOnInit() {
      this.shows = this.showService.getTopRated();
  
    }

}
