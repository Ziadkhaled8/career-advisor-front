import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CareerRecommendationService } from '../../services/career-recommendation.service';
import { UserProfileService } from '../../services/user-profile.service';
import { RecommendationResponse } from '../../interfaces/recommendation-response';
import { UserProfile } from '../../interfaces/user-profile';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule],
})
export class DashboardComponent implements OnInit {
  recommendations: RecommendationResponse = {
    recommendations: []
  };
  profile?: UserProfile;
  userEmail: string | null = '';
  loading = true;

  constructor(
    private recommendationService: CareerRecommendationService, private profileService: UserProfileService,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.userEmail = localStorage.getItem('email');
    }
    this.fetchUserProfile();
    this.getRecommendations();
  }

  getRecommendations(): void {
    this.loading = true;
    this.recommendationService.getRecommendations().subscribe({
      next: (data) => {
        this.recommendations = data; // Assign directly if data is RecommendationResponse
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching recommendations:', err);
        this.loading = false;
      }
    });
  }

  fetchUserProfile(): void {
    this.profileService.getUserProfile().subscribe({
      next: (data) => {
        this.profile = data;
      },
      error: (err) => {
        console.error('Error fetching profile:', err);
      }
    });
  }
}
