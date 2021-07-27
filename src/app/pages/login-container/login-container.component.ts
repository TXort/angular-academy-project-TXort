import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ILoginFormData } from './login-form/login-form.component';

@Component({
	selector: 'app-login-container',
	templateUrl: './login-container.component.html',
	styleUrls: ['./login-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
	public isLoading$: Subject<boolean> = new Subject();

	constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) {}

	public onLogin(loginData: ILoginFormData): void {
		this.isLoading$.next(true);
		this.authService
			.logIn(loginData)
			.pipe(
				finalize(() => {
					this.isLoading$.next(false);
				})
			)
			.subscribe(
				(res) => console.log('response', res),
				(err) => {
					this.snackBar.open('Wrong password!', 'Dismiss', {
						duration: 3000,
					});
				},
				() => this.router.navigate([''])
			);
	}
}
