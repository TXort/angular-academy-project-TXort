import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILink } from 'src/app/interfaces/link.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
	constructor(private authService: AuthService, private router: Router) {}

	public links: Array<ILink> = [
		{
			url: '',
			title: 'All shows',
		},
		{
			url: '/top-rated',
			title: 'Top rated',
		},
		{
			url: '/my-profile',
			title: 'My profile',
		},
	];

	public logOut(): void {
		this.authService.logOut();
		this.router.navigate(['/login']);
	}
}
