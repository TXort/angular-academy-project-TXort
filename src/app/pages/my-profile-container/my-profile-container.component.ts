import { Component, ChangeDetectionStrategy } from '@angular/core';
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
}
