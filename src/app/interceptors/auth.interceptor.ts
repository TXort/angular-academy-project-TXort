import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpHeaders,
	HttpResponse,
	HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthData } from '../interfaces/auth-data.interface';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const authData: AuthData | null = this.authService.getAuthData();

		let finalRequest: HttpRequest<unknown> = request;

		if (authData) {
			finalRequest = request.clone({
				headers: new HttpHeaders({
					client: authData.client,
					token: authData.token,
					uid: authData.uid,
				}),
			});
		}

		return next.handle(finalRequest);
	}
}
