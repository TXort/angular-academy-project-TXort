import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/app/services/review.model';

@Component({
	selector: 'app-show-reviews',
	templateUrl: './show-reviews.component.html',
	styleUrls: ['./show-reviews.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowReviewsComponent {
	@Input() reviews: Array<Review>;
}
