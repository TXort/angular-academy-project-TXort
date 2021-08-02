import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRawShow } from '../interfaces/rawShow.interface';
import { Show } from './show.model';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	constructor(private http: HttpClient) {}

	public getShows(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IRawShow> }>('https://tv-shows.infinum.academy/shows').pipe(
			map((response) => {
				console.log(response);
				return [].map((rawShowData) => new Show(rawShowData));
			})
		);
	}

	public getTopRated(): Observable<Array<Show>> {
		return this.getShows().pipe(map((shows) => shows.filter((show: Show) => show.averageRating > 4)));
	}

	public getShow(id: string): Observable<Show | null> {
		return this.getShows().pipe(map((shows) => shows.find((show: Show) => show.id === id) || null));
	}
}
