import { FormGroup } from '@angular/forms';

export function confirmPassowordValidator(firstControlName: string, secondControlName: string) {
	return (formGroup: FormGroup) => {
		const control = formGroup.get(`${firstControlName}`);
		const matchingControl = formGroup.get(`${secondControlName}`);
		if (control && matchingControl) {
			if (control.value !== matchingControl.value) {
				matchingControl.setErrors({ passwordNotConfirmed: true });
			} else {
				matchingControl.setErrors(null);
			}
		}
	};
}
