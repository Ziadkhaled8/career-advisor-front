import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { CareerRecommendationBriefDto } from '../interfaces/recommendation-response';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RecommendationService {
  private api = environment.apiBaseUrl + '/api/recommendation';

  constructor(private http: HttpClient) {}

  getSaved() {
    return this.http.get<CareerRecommendationBriefDto[]>(`${this.api}/saved`);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
