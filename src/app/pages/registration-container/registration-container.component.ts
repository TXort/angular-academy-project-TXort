import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

export interface IRegistrationFormData {
	email: string;
	password: string;
	password_confirmation: string;
}

@Component({
	selector: 'app-registration-container',
	templateUrl: './registration-container.component.html',
	styleUrls: ['./registration-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationContainerComponent {
	public isLoading$: Subject<boolean> = new Subject();

	constructor(private router: Router, private authService: AuthService) {}

	public onRegister(registrationData: IRegistrationFormData): void {
		this.isLoading$.next(true);
		this.authService
			.register(registrationData)
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
