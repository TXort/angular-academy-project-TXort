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

	private rating = 0;
	private starCount = 5;
	public ratingArr: boolean[] = [];

	constructor(private fb: FormBuilder) {
		this.ratingArr = Array(this.starCount).fill(false);
	}

	public reviewFormGroup: FormGroup = this.fb.group({
		comment: ['', [Validators.required]],
		rating: [''],
	});

	public getStar(i: number) {
		if (this.rating >= i + 1) {
			return 'star';
		} else {
			return 'star_border';
		}
	}

	public onStarClick(i: number) {
		this.rating = i + 1;
	}

	public onSubmit(): void {
		this.reviewFormGroup.patchValue({ rating: `${this.rating}` });
		this.submit.emit(this.reviewFormGroup.value);
		this.reviewFormGroup.reset();
	}
}
