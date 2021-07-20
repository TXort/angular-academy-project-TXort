import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-all-shows-container',
  templateUrl: './all-shows-container.component.html',
  styleUrls: ['./all-shows-container.component.css']
})
export class AllShowsContainerComponent implements OnInit {

    shows: Array<Show> = [];

    constructor(private showService: ShowService) {

    }
  
    ngOnInit() {
      this.shows = this.showService.getShows();
  
    }

}
