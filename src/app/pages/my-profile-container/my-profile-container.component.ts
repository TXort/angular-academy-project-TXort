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
		this.authService.getUserInfo().subscribe((userInfo) => {
			//			console.log(userInfo);
			userInfo.image_url = URL.createObjectURL(event.target.files[0]);
			this.authService.updateProfilePicture(userInfo).subscribe((x) => {
				//				console.log(x);
			});
		});
	}
}
