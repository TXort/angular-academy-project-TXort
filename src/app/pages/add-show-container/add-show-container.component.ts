import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ShowService } from 'src/app/services/show.service';
import { ShowFormData } from './components/show-form.component';

@Component({
	selector: 'app-add-show-container',
	templateUrl: './add-show-container.component.html',
	styleUrls: ['./add-show-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddShowContainerComponent {
	public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	constructor(private showService: ShowService, private router: Router) {}

	public onShowAdd(showFromData: ShowFormData): void {
		this.isLoading$.next(false);
		this.showService
			.onShowAdd(showFromData)
			.pipe(
				finalize(() => {
					this.isLoading$.next(false);
				})
			)
			.subscribe((showFormData: ShowFormData) => {
				// sukses
				this.router.navigate(['']);
			});
	}
}
