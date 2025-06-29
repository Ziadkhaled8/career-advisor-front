import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CareerRecommendationBriefDto } from '../../interfaces/recommendation-response';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  standalone: true,
  selector: 'app-saved-recommendations',
  templateUrl: './saved-recommendations.component.html',
  styleUrls: ['./saved-recommendations.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class SavedRecommendationsComponent implements OnInit {
  recs: CareerRecommendationBriefDto[] = [];
  loading = true;

  constructor(private recSvc: RecommendationService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.recSvc.getSaved().subscribe({
      next: (d) => { this.recs = d; this.loading = false; },
      error: () => this.loading = false
    });
  }

  remove(id: number) {
    if (!confirm('Delete this recommendation?')) return;
    this.recSvc.delete(id).subscribe(() => this.load());
  }
}
