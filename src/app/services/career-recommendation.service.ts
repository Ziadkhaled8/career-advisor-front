
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecommendationResponse } from '../interfaces/recommendation-response';
import { environment } from '../environment/environment';

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
  private apiUrl = environment.apiBaseUrl+"/api/recommendation";

  constructor(private http: HttpClient) {}

  getRecommendations(): Observable<RecommendationResponse> {
    return this.http.get<RecommendationResponse>(this.apiUrl);
  }
}
