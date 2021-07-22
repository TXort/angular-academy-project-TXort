import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRawReview } from '../interfaces/rawReview.interface';
import { Review } from './review.model';
import { delay, filter, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	rawData: Array<IRawReview> = [
		{
			show_id: '1',
			rating: 10,
			comment: 'Great show!',
			id: '1',
		},
		{
			show_id: '1',
			rating: 9,
			comment: 'Best show!',
			id: '2',
		},
		{
			show_id: '2',
			rating: 8,
			comment: 'Decent show!',
			id: '3',
		},
		{
			show_id: '3',
			rating: 3,
			comment: 'Really bad show!',
			id: '4',
		},
		{
			show_id: '3',
			rating: 1,
			comment: 'This show should not exist!',
			id: '5',
		},
	];

	private get reviews(): Array<Review> {
		return this.rawData.map((rawShowData: IRawReview) => {
			return new Review(rawShowData);
		});
	}

	public getReviews(): Observable<Array<Review>> {
		return of(this.reviews).pipe(delay(1000 + Math.random() * 1000));
	}

	public getReview(id: string): Observable<Review | null> {
		return this.getReviews().pipe(map((reviews) => reviews.find((review: Review) => review.id === id) || null));
	}

	public getReviewsOnShow(show_id: string): Observable<Array<Review>> {
		return this.getReviews().pipe(
			map((reviews: Array<Review>) => reviews.filter((review: Review) => review.show_id === show_id))
		);
	}
}
