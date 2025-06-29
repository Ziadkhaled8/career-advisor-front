import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileBuilderComponent } from './pages/profile-builder/profile-builder.component';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { SavedRecommendationsComponent } from './pages/saved-recommendations/saved-recommendations.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'saved', component: SavedRecommendationsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'userprofile', component: ProfileBuilderComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];