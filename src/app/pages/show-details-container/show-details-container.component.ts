import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { finalize, map, subscribeOn, switchMap } from 'rxjs/operators';
import { Review } from 'src/app/services/review.model';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';
import { ReviewService } from 'src/app/services/review.service';
import { IRawReview } from 'src/app/interfaces/rawReview.interface';

@Component({
	selector: 'app-show-details-container',
	templateUrl: './show-details-container.component.html',
	styleUrls: ['./show-details-container.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsContainerComponent {
	id: string;
	reviews$: Observable<Array<Review> | null>;
	refreshReviews$ = new BehaviorSubject<boolean>(true);
	show$: Observable<Show | null>;

	constructor(private route: ActivatedRoute, private showService: ShowService, private reviewService: ReviewService) {
		this.route.paramMap.subscribe((params) => {
			const tempId = params.get('id');
			if (tempId) this.id = tempId;
		});
	}

	ngOnInit() {
		this.reviews$ = this.refreshReviews$.pipe(switchMap((_) => this.reviewService.getReviewsOnShow(this.id)));
		this.show$ = this.showService.getShow(this.id);
	}

	public onSubmit(reviewData: IRawReview): void {
		reviewData.show_id = this.id;
		this.reviewService.submitReview(reviewData).subscribe((r) => console.log(r));
		this.reviewService.getReviewsOnShow(this.id).subscribe();
		this.refreshReviews$.next(true);
	}
}
