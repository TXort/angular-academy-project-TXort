import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AppGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authService.isLoggedIn$.pipe(
			map((isLoggedIn: boolean) => {
				if (isLoggedIn) {
					return isLoggedIn;
				}

				return this.router.parseUrl('/login');
			})
		);
	}
}
