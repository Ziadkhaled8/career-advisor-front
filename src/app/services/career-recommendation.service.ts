
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LearningResource {
  title: string;
  url: string;
}

export interface CareerRecommendation {
  title: string;
  matchScore: number;
  skillGaps: string[];
  resources: LearningResource[];
}

@Injectable({
  providedIn: 'root'
})
export class CareerRecommendationService {
  private apiUrl = 'https://localhost:7182/api/recommendation';

  constructor(private http: HttpClient) {}

  getRecommendations(): Observable<CareerRecommendation[]> {
    return this.http.get<CareerRecommendation[]>(this.apiUrl);
  }
}
