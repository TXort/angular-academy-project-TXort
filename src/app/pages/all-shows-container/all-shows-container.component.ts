import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';

interface ITemplateData {
	allShows: Array<Show>;
	topRated: Array<Show>;
}

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent {
	//	public shows$: Observable<Array<Show>> = this.showService.getShows();
	//	public topRated$: Observable<Array<Show>> = this.showService.getTopRated();

	public templateData$: Observable<ITemplateData> = combineLatest([
		this.showService.getShows(),
		this.showService.getTopRated(),
	]).pipe(
		map(([shows, topRated]) => {
			return {
				allShows: shows,
				topRated: topRated,
			};
		})
		//	tap(console.log)
	);

	constructor(private showService: ShowService) {}
}
