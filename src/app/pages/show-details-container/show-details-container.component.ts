import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-details-container',
  templateUrl: './show-details-container.component.html',
  styleUrls: ['./show-details-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowDetailsContainerComponent {

  constructor(private route: ActivatedRoute, private showService: ShowService) { }

  public show$: Observable< Show | null > = this.route.paramMap.pipe(
    switchMap((paramMap) => {
      const id: string | null = paramMap.get('id');
      
      if (id)
        return this.showService.getShow(id);
      return of(null);
    })
  );

}
