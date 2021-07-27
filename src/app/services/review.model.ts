import { IRawReview } from '../interfaces/rawReview.interface';
import { IUser } from '../interfaces/user.interface';

export class Review {
	constructor(rawReviewData: IRawReview) {
		this.rating = rawReviewData.rating;
		this.comment = rawReviewData.comment;
		this.show_id = rawReviewData.show_id;
		this.id = rawReviewData.id;
		this.user = rawReviewData.user;
	}

	rating: number;
	comment: string;
	show_id: string;
	id: string;
	user: IUser;
}
