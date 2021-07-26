import { FormGroup } from '@angular/forms';

export function confirmPassowordValidator(firstControlName: string, secondControlName: string) {
	return (formGroup: FormGroup) => {
		const control = formGroup.controls[firstControlName];
		const matchingControl = formGroup.controls[secondControlName];
		if (control.value !== matchingControl.value) {
			matchingControl.setErrors({ passwordNotConfirmed: true });
		} else {
			matchingControl.setErrors(null);
		}
	};
}
