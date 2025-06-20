import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerRecommendationService } from '../services/career-recommendation.service';

interface LearningResource {
  title: string;
  url: string;
}

interface CareerRecommendation {
  title: string;
  matchScore: number;
  skillGaps: string[];
  resources: LearningResource[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule],
})
export class DashboardComponent implements OnInit {
  recommendations: any[] = [];
  loading = true;

  constructor(private recommendationService: CareerRecommendationService) {
    console.log('DashboardComponent initialized');
  }

  ngOnInit(): void {
    console.log('a7a');
    this.recommendationService.getRecommendations().subscribe({
      next: (data) => {
        console.log('Fetched recommendations:', data);
        this.recommendations = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching recommendations:', err);
        this.loading = false;
      }
    });
  }
}
