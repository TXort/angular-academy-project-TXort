import { IRawReview } from '../interfaces/rawReview.interface';

export class Review {
	constructor(rawReviewData: IRawReview) {
		this.rating = rawReviewData.rating;
		this.comment = rawReviewData.comment;
		this.show_id = rawReviewData.show_id;
		this.id = rawReviewData.id;
	}

	rating: number;
	comment: string;
	show_id: string;
	id: string;
}
