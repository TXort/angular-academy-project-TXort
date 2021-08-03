import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRawShow } from '../interfaces/rawShow.interface';
import { Show } from './show.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	constructor(private http: HttpClient) {}

	public getShows(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IRawShow> }>('https://tv-shows.infinum.academy/shows').pipe(
			map(({ shows }: { shows: Array<IRawShow> }) => {
				return shows.map((rawShowData) => new Show(rawShowData));
			})
		);
	}

	public getTopRated(): Observable<Array<Show>> {
		return this.http.get<{ shows: Array<IRawShow> }>('https://tv-shows.infinum.academy/shows/top_rated').pipe(
			map(({ shows }: { shows: Array<IRawShow> }) => {
				return shows.map((rawShowData) => new Show(rawShowData));
			})
		);
	}

	public getShow(id: string): Observable<Show | null> {
		return this.http.get<{ show: IRawShow }>(`https://tv-shows.infinum.academy/shows/${id}`).pipe(
			map(({ show }: { show: IRawShow }) => {
				return new Show(show);
			})
		);
	}

}
