import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

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
	],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatSidenavModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
