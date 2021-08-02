import { FormControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: FormControl): ValidationErrors | null {
	const invalidWord: string = 'duck';
	const enteredValue: string = control.value || '';
	const invalid: boolean = enteredValue.includes(invalidWord);

	if (invalid) return { email: 'Invalid email!' };
	return null;
}
