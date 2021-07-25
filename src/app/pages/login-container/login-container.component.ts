import { HttpResponse } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
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

	constructor(private router: Router, private authService: AuthService) {}

	public onLogin(loginData: ILoginFormData): void {
		this.isLoading$.next(true);
		this.authService
			.logIn(loginData)
			.pipe(
				finalize(() => {
					this.isLoading$.next(false);
				})
			)
			.subscribe(() => {
				this.router.navigate(['']);
			});
	}
}
