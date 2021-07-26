import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { TopRatedContainerComponent } from './pages/top-rated-container/top-rated-container.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { AddShowContainerComponent } from './pages/add-show-container/add-show-container.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ path: '', component: AllShowsContainerComponent, canActivate: [AppGuard] },
			{ path: 'top-rated', component: TopRatedContainerComponent, canActivate: [AppGuard] },
			{ path: 'show/:id', component: ShowDetailsContainerComponent, canActivate: [AppGuard] },
		],
		canActivate: [AppGuard],
	},
	{
		path: '',
		component: FormLayoutComponent,
		children: [
			{ path: 'add-show', component: AddShowContainerComponent },
			{ path: 'login', component: LoginContainerComponent },
			{ path: 'register', component: RegistrationContainerComponent },
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
