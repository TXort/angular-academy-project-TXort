import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
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
	constructor(private route: ActivatedRoute, private showService: ShowService, private reviewService: ReviewService) {}

	singleEvent$: BehaviorSubject<string | null>;

	public show$: Observable<Show | null> = this.route.paramMap.pipe(
		switchMap((paramMap) => {
			const id: string | null = paramMap.get('id');

			if (!this.singleEvent$) {
				this.singleEvent$ = new BehaviorSubject(id);
			} else {
				this.singleEvent$.next(id);
			}

			if (id) return this.showService.getShow(id);
			return of(null);
		})
	);

	public reviews$: Observable<Array<Review> | null> = this.route.paramMap.pipe(
		switchMap((paramMap) => {
			const id: string | null = paramMap.get('id');

			if (id) return this.reviewService.getReviewsOnShow(id);
			return of(null);
		})
	);

	public onSubmit(reviewData: IRawReview): void {
		let x = this.singleEvent$.value;
		console.log(typeof reviewData.rating);
		reviewData.show_id = x || '';
		this.reviewService.submitReview(reviewData).subscribe();
		/* this.reviewService
			.submitReview(reviewData)
			.pipe(finalize(() => {}))
			.subscribe((showFormData: IRawReview) => {
				console.log(showFormData);
			}); */
	}
}
