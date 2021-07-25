import { EventEmitter } from '@angular/core';
import { Component, ChangeDetectionStrategy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface ILoginFormData {
	email: string;
	password: string;
}

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
	@Output() login: EventEmitter<ILoginFormData> = new EventEmitter();

	public loginFormGroup: FormGroup = this.fb.group({
		email: ['', [Validators.required]],
		password: ['', Validators.required],
	});

	constructor(private fb: FormBuilder) {}

	public onLogin(): void {
		this.login.emit(this.loginFormGroup.value);
	}
}
