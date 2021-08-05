import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Review } from 'src/app/services/review.model';
import { IUser } from 'src/app/interfaces/user.interface';
import { ReviewService } from 'src/app/services/review.service';


@Component({
	selector: 'app-show-reviews',
	templateUrl: './show-reviews.component.html',
	styleUrls: ['./show-reviews.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowReviewsComponent {
	@Input() reviews: Array<Review>;
	@Output() delete = new EventEmitter();

	constructor(private authService: AuthService, private reviewService: ReviewService) {}

	public canDelete(review: Review): boolean {
		return this.authService.getAuthData()?.uid === review.user.email;
	}

	public onDelete(review: Review): void {
		this.reviewService.deleteReview(review).subscribe((err) => { 
			this.delete.emit();
		});
	}
}
