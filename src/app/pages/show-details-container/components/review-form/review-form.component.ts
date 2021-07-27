import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRawReview } from 'src/app/interfaces/rawReview.interface';

@Component({
	selector: 'app-review-form',
	templateUrl: './review-form.component.html',
	styleUrls: ['./review-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewFormComponent {
	@Output() submit: EventEmitter<IRawReview> = new EventEmitter();

	public reviewFormGroup: FormGroup = this.fb.group({
		comment: ['', [Validators.required]],
		rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
	});

	constructor(private fb: FormBuilder) {}

	public onSubmit(): void {
		this.submit.emit(this.reviewFormGroup.value);
		//		this.reviewFormGroup.reset();
	}
}
