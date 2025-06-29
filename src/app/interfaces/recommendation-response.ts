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

export interface CareerRecommendationBriefDto {
  id: number;
  title: string;
  matchScore: number;
  createdAt: Date;
  skillGaps: string[];
  resources: LearningResource[];
}

export interface RecommendationResponse {
  recommendations: CareerRecommendation[];
}