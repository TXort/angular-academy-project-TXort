import { EventEmitter } from '@angular/core';
import { Component, ChangeDetectionStrategy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPassowordValidator } from 'src/app/validators/confirm-password';
import { emailValidator } from 'src/app/validators/email';

export interface IRegistrationFormData {
	email: string;
	password: string;
	password_confirmation: string;
}

@Component({
	selector: 'app-registration-form',
	templateUrl: './registration-form.component.html',
	styleUrls: ['./registration-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationFormComponent {
	@Output() registration: EventEmitter<IRegistrationFormData> = new EventEmitter();

	public registrationFormGroup: FormGroup = this.fb.group(
		{
			email: ['', [Validators.required, emailValidator]],
			password: ['', [Validators.required, Validators.minLength(8)]],
			password_confirmation: [''],
		},
		{
			validator: confirmPassowordValidator('password', 'password_confirmation'),
		}
	);

	constructor(private fb: FormBuilder) {}

	public onRegister(): void {
		this.registration.emit(this.registrationFormGroup.value);
		this.registrationFormGroup.reset();
	}
}
