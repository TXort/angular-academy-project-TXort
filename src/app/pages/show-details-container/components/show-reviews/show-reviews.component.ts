import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Review } from 'src/app/services/review.model';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
	selector: 'app-show-reviews',
	templateUrl: './show-reviews.component.html',
	styleUrls: ['./show-reviews.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowReviewsComponent {
	@Input() reviews: Array<Review>;

	constructor(private authService: AuthService) {}

	public canDelete(review: Review): string {
		if (this.authService.getAuthData()?.uid === review.user.email) return 'enabled';
		return 'disabled';
	}

	public onDelete(review: Review) {}
}
