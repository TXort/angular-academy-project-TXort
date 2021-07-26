import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRawShow } from '../interfaces/rawShow.interface';
import { Show } from './show.model';
import { map } from 'rxjs/operators';
import { ShowFormData } from '../pages/add-show-container/components/show-form.component';
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
		//	return this.getShows().pipe(map((shows) => shows.find((show: Show) => show.id === id) || null));
		return this.http.get<{ show: IRawShow }>(`https://tv-shows.infinum.academy/shows/${id}`).pipe(
			map(({ show }: { show: IRawShow }) => {
				return new Show(show);
			})
		);
	}

	public onShowAdd(showData: ShowFormData): Observable<ShowFormData> {
		return this.http.post<ShowFormData>('https://tv-shows.infinum.academy/shows', showData);
	}
}
