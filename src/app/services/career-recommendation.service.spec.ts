import { TestBed } from '@angular/core/testing';

import { CareerRecommendationService } from './career-recommendation.service';

describe('CareerRecommendationService', () => {
  let service: CareerRecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerRecommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
