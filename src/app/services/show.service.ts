import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRawShow } from '../interfaces/rawShow.interface';
import { Show } from './show.model';
import { delay, map, tap } from 'rxjs/operators';
import { ShowFormData } from '../pages/add-show-container/components/show-form.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	/* rawData: Array<IRawShow> = [
		{
			title: 'My first show',
			description: 'First show description',
			average_rating: 7,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
			id: '1',
		},
		{
			title: 'My seconds show',
			description: 'Second show description',
			average_rating: 5,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
			id: '2',
		},
		{
			title: 'My third show',
			description: 'Third show description',
			average_rating: 3,
			image_url: 'https://upload.wikimedia.org/wikipedia/en/5/55/GodfatherIII2.jpg',
			id: '3',
		},
	]; */

	constructor(private http: HttpClient) {}

	/* private get shows(): Observable<Array<Show>> {
		//	return this.rawData.map((rawShowData: IRawShow) => {
		//		return new Show(rawShowData);
		//	});
		return this.http.get<{ shows: Array<IRawShow> }>('https://tv-shows.infinum.academy/shows').pipe(
			map(({ shows }: { shows: Array<IRawShow> }) => {
				return shows.map((rawShowData) => new Show(rawShowData));
			})
		);
	} */

	public getShows(): Observable<Array<Show>> {
		//	return this.shows.pipe(delay(1000 + Math.random() * 1000));
		/* return this.http.get<{ shows: Array<IRawShow> }>('https://tv-shows.infinum.academy/shows').pipe(
			map(({ shows }: { shows: Array<IRawShow> }) => {
				return shows.map((rawShowData) => new Show(rawShowData));
			})
		); */
		return this.http.get<{ body: { shows: Array<IRawShow> } }>('https://tv-shows.infinum.academy/shows').pipe(
			map((response) => {
				return response.body.shows.map((rawShowData: IRawShow) => new Show(rawShowData));
			})
		);
	}

	public getTopRated(): Observable<Array<Show>> {
		return this.http.get<{ body: { shows: Array<IRawShow> } }>('https://tv-shows.infinum.academy/shows/top_rated').pipe(
			map((response) => {
				return response.body.shows.map((rawShowData: IRawShow) => new Show(rawShowData));
			})
		);
	}

	public getShow(id: string): Observable<Show | null> {
		return this.getShows().pipe(map((shows) => shows.find((show: Show) => show.id === id) || null));
	}

	public onShowAdd(showData: ShowFormData): Observable<ShowFormData> {
		return this.http.post<ShowFormData>('https://tv-shows.infinum.academy/shows', showData);
	}
}
