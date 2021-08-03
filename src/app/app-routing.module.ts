import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { TopRatedContainerComponent } from './pages/top-rated-container/top-rated-container.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { AppGuard } from './guards/app.guard';
import { MyProfileContainerComponent } from './pages/my-profile-container/my-profile-container.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ path: '', component: AllShowsContainerComponent },
			{ path: 'top-rated', component: TopRatedContainerComponent },
			{ path: 'show/:id', component: ShowDetailsContainerComponent },
			{ path: 'my-profile', component: MyProfileContainerComponent },
		],
		canActivate: [AppGuard],
	},
	{
		path: '',
		component: FormLayoutComponent,
		children: [
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
