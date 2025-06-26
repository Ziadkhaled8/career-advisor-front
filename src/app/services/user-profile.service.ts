import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Console } from 'console';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private baseUrl = environment.apiBaseUrl+"/api/UserProfiles"; 

  constructor(private http: HttpClient) {}

  createProfile(profileData: any) {
    return this.http.post(`${this.baseUrl}`, profileData);
  }

  getUserProfile(): Observable<any> {
    return this.http.get<any>(this.baseUrl+ "/me");
  }
  updateUserProfile(profile: any) {
  return this.http.put(`${this.baseUrl}`, profile);
}
}
