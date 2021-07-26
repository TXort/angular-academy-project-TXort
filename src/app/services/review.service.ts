import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRawReview } from '../interfaces/rawReview.interface';
import { Review } from './review.model';
import { delay, filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	/* rawData: Array<IRawReview> = [
		{
			show_id: '106',
			rating: 10,
			comment: 'Great show!',
			id: '1',
			user: { id: '2', email: 'sdfds', image_url: 'sda' },
		},
	]; 

	private get reviews(): Array<Review> {
		return this.rawData.map((rawShowData: IRawReview) => {
			return new Review(rawShowData);
		});
	}
	*/

	constructor(private http: HttpClient) {}

	/* public getReviews(): Observable<Array<Review>> {
		//	return of(this.reviews).pipe(delay(1000 + Math.random() * 1000));
		return this.http.get<{ reviews: Array<IRawReview> }>('https://tv-shows.infinum.academy/shows/reviews').pipe(
			map(({ reviews }: { reviews: Array<IRawReview> }) => {
				return reviews.map((rawShowData) => new Review(rawShowData));
			})
		);
	}

	public getReview(id: string): Observable<Review | null> {
		return this.getReviews().pipe(map((reviews) => reviews.find((review: Review) => review.id === id) || null));
	}
 */
	public getReviewsOnShow(show_id: string): Observable<Array<Review>> {
		return this.http
			.get<{ reviews: Array<IRawReview> }>(`https://tv-shows.infinum.academy/shows/${show_id}/reviews`)
			.pipe(
				map(({ reviews }: { reviews: Array<IRawReview> }) => {
					return reviews.map((rawShowData) => new Review(rawShowData));
				})
			);
	}
}
