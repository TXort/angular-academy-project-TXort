import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthData } from '../interfaces/auth-data.interface';
import { ILoginFormData } from '../pages/login-container/login-form/login-form.component';
import { IRegistrationFormData } from '../pages/registration-container/registration-container.component';
import { StorageService } from './storage.service';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly authDataKey = 'authData';

	constructor(private http: HttpClient, private storage: StorageService) {}

	private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(Boolean(this.getAuthData()));
	public isLoggedIn$: Observable<boolean> = this._isLoggedIn$.asObservable();

	public logIn(loginData: ILoginFormData): Observable<any> {
		return this.http
			.post<HttpResponse<any>>('https://tv-shows.infinum.academy/users/sign_in', loginData, {
				observe: 'response',
			})
			.pipe(
				tap((response: HttpResponse<any>) => {
					console.log(response);
					const uid: string | null = response.headers.get('uid');
					const token: string | null = response.headers.get('access-token');
					const client: string | null = response.headers.get('client');

					if (uid && token && client) {
						this.saveAuthData({ token, client, uid });
						this._isLoggedIn$.next(true);
					}
				})
			);
	}

	public register(registrationData: IRegistrationFormData): Observable<any> {
		return this.http
			.post<HttpResponse<any>>('https://tv-shows.infinum.academy/users', registrationData, {
				observe: 'response',
			})
			.pipe(
				tap((response: HttpResponse<any>) => {
					console.log(response);
				})
			);
	}

	private saveAuthData(authData: AuthData): void {
		this.storage.add(this.authDataKey, authData);
	}

	public logOut(): void {
		this.storage.remove(this.authDataKey);
		this._isLoggedIn$.next(false);
	}

	public getAuthData(): AuthData | null {
		return this.storage.get(this.authDataKey);
	}
}
