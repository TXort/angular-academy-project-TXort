import { FormControl, ValidationErrors } from '@angular/forms';

// Zero creativity right now, so I copy this 'duck' example from video lecture to complete extra task :D
export function emailValidator(control: FormControl): ValidationErrors | null {
	const invalidWord: string = 'duck';
	const enteredValue: string = control.value || '';
	const invalid: boolean = enteredValue.includes(invalidWord);

	if (invalid) return { email: 'Invalid email!' };
	return null;
}
