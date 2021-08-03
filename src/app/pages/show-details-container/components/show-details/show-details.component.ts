import { Component, Input } from '@angular/core';
import { Show } from 'src/app/services/show.model';

@Component({
	selector: 'app-show-details',
	templateUrl: './show-details.component.html',
	styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent {
	@Input() show: Show;
}
