import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimalComponent } from './animal/animal.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PushNotificationsModule } from 'ng-push-ivy';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		FormsModule,
		RouterModule,
		HttpClientModule,
		AppRoutingModule,
		MatSnackBarModule,
		PushNotificationsModule,
	],
	declarations: [AppComponent, LayoutComponent, HomeComponent, NavbarComponent, AnimalComponent],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
