import { Routes } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';

export const LayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: '**', redirectTo: 'home'}
];
