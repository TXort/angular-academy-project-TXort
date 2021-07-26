import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

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

/* export function confirmPassowordValidator(control: FormControl): ValidationErrors | null {
	const enteredValue: string = control.value || '';
	const matchingValue: string = control.parent?.get('password')?.value || '';
	const invalid: boolean = enteredValue !== matchingValue;
	if (invalid) return { passwordNotConfirmed: 'Password does not match' };
	return null;
}
 */
