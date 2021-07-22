import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-top-rated-container',
  templateUrl: './top-rated-container.component.html',
  styleUrls: ['./top-rated-container.component.css']
})
export class TopRatedContainerComponent  {

    public shows$: Observable<Array<Show> > = this.showService.getTopRated();

    constructor(private showService: ShowService) {}

}
