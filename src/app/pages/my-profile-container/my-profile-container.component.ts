import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-my-profile-container',
	templateUrl: './my-profile-container.component.html',
	styleUrls: ['./my-profile-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyProfileContainerComponent {
	constructor(private authService: AuthService) {}

	public email = this.authService.getAuthData()?.uid;

	public onFileSelected(event: any) {
		const objectURL = window.URL.createObjectURL(event.target.files[0]);
		var formdata = new FormData();
		formdata.append('image_url', event.target.files[0]);

		/* var email = this.authService.getAuthData()?.uid;
		if (email) formdata.append('email', email); */
		const no = {
			image_url: `image=${event.target.files[0]}`,
			email: this.authService.getAuthData()?.uid,
		};
		console.log(formdata);
		this.authService.updateProfilePicture(no).subscribe((err) => console.log(err));
		/* console.log(
			this.authService.getUserInfo().subscribe(
				(res) => console.log(23),
				(err) => console.log('error')
			)
		); */
	}
}
