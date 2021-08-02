import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


interface ILayout {
	isSmall: boolean;
}
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainLayoutComponent {

  public layout$: Observable<ILayout>;


	constructor(breakpointObserver: BreakpointObserver) {
		this.layout$ = breakpointObserver.observe(['(min-width: 0px) and (max-width: 767px)', '(max-width: 768px)']).pipe(
			map(({ matches }) => {
				return {
					isSmall: matches,
				};
			})
		);
	}


}
