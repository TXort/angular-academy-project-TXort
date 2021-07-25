import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { ShowsListComponent } from './components/show-list/show-list.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { AppRoutingModule } from './app-routing.module';
import { TopRatedContainerComponent } from './pages/top-rated-container/top-rated-container.component';
import { ShowDetailsContainerComponent } from './pages/show-details-container/show-details-container.component';
import { ShowDetailsComponent } from './pages/show-details-container/components/show-details/show-details.component';
import { ShowReviewsComponent } from './pages/show-details-container/components/show-reviews/show-reviews.component';
import { AddShowContainerComponent } from './pages/add-show-container/add-show-container.component';
import { ShowFormComponent } from './pages/add-show-container/components/show-form.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { LoginFormComponent } from './pages/login-container/login-form/login-form.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
	declarations: [
		AppComponent,
		ShowCardComponent,
		ShowsListComponent,
		MainLayoutComponent,
		SidenavComponent,
		AllShowsContainerComponent,
		TopRatedContainerComponent,
		ShowDetailsContainerComponent,
		ShowDetailsComponent,
		ShowReviewsComponent,
		AddShowContainerComponent,
		ShowFormComponent,
		FormLayoutComponent,
		LoginContainerComponent,
		LoginFormComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatSidenavModule,
		AppRoutingModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		HttpClientModule,
		MatProgressBarModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
