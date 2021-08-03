import { Component, Input } from '@angular/core';
import { Show } from 'src/app/services/show.model';

@Component({
	selector: 'app-show-list',
	templateUrl: './show-list.component.html',
	styleUrls: ['./show-list.component.css'],
})
export class ShowsListComponent {
	@Input() shows: Array<Show>;
}
