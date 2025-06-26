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

export interface RecommendationResponse {
  recommendations: CareerRecommendation[];
}