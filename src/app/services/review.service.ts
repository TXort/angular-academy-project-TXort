import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRawReview } from '../interfaces/rawReview.interface';
import { Review } from './review.model';
import { delay, filter, map, tap } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ReviewService {
	constructor(private http: HttpClient) {}

	public getReviewsOnShow(show_id: string): Observable<Array<Review>> {
		return this.http
			.get<{ reviews: Array<IRawReview> }>(`https://tv-shows.infinum.academy/shows/${show_id}/reviews`)
			.pipe(
				map(({ reviews }: { reviews: Array<IRawReview> }) => {
					return reviews.map((rawShowData) => new Review(rawShowData));
				})
			);
	}

	public submitReview(reviewData: IRawReview): Observable<any> {
		return this.http.post<HttpResponse<any>>('https://tv-shows.infinum.academy/reviews', reviewData);
	}
}
