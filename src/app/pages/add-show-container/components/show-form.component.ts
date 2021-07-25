import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/validators/email';

export interface ShowFormData {
	title: string;
	description: string;
	imgUrl: string;
}

@Component({
	selector: 'app-show-form',
	templateUrl: './show-form.component.html',
	styleUrls: ['./show-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowFormComponent {
	@Output() addShow: EventEmitter<ShowFormData> = new EventEmitter();

	public showFormGroup: FormGroup = this.fb.group({
		title: ['', [Validators.required, emailValidator]],
		description: [],
		imgUrl: [],
	});

	constructor(private fb: FormBuilder) {}

	public onAddShow(): void {
		this.addShow.emit(this.showFormGroup.value);
		this.showFormGroup.reset();
	}
}
