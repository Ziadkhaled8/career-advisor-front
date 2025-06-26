import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../interfaces/user-profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-builder',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './profile-builder.component.html',
  styleUrls: ['./profile-builder.component.scss'],
})
export class ProfileBuilderComponent {

  availableSkills = ['Frontend', 'Backend', 'SQL', 'Communication', 'Leadership'];
  availableInterests = ['AI', 'Design', 'FinTech', 'Remote Work'];
  availableGoals = ['Higher salary', 'Remote job', 'Fast growth', 'Work-life balance'];


  backgroundForm: FormGroup;
  skillsForm: FormGroup;
  interestsForm: FormGroup;
  goalsForm: FormGroup;
  profile?:UserProfile;
  isEditMode = false;

  constructor(private fb: FormBuilder, private profileService: UserProfileService,private router: Router) {

    this.backgroundForm = this.fb.group({
      educationLevel: ['', Validators.required],
      currentJobTitle: [''],
      yearsOfExperience: [0, [Validators.required, Validators.min(0)]],
    });



    this.skillsForm = this.fb.group({
      skills: this.fb.control<string[]>([], Validators.required),
    });

    this.interestsForm = this.fb.group({
      interests: this.fb.control<string[]>([]),
    });

    this.goalsForm = this.fb.group({
      goals: this.fb.control<string[]>([]),
    });
  }

  ngOnInit(): void {
    this.profileService.getUserProfile().subscribe({
      next: (profile) => {
        this.profile = profile;
        this.backgroundForm.patchValue({
          educationLevel: profile.educationLevel,
          currentJobTitle: profile.currentJobTitle,
          yearsOfExperience: profile.yearsOfExperience,
        });
        this.skillsForm.patchValue({
          skills: profile.skills || [],
        });
        this.interestsForm.patchValue({
          interests: profile.interests || [],
        });
        this.goalsForm.patchValue({
          goals: profile.goals || [],
        });
        this.isEditMode = true;
      },
      error: () => {
        this.isEditMode = false;
      }
    });
  }


  get isWizardValid(): boolean {
    return (
      this.backgroundForm.valid &&
      this.skillsForm.valid &&
      this.interestsForm.valid &&
      this.goalsForm.valid
    );
  }

  submitProfile() {
    this.profile = {
      ...this.backgroundForm.value,
      ...this.skillsForm.value,
      ...this.interestsForm.value,
      ...this.goalsForm.value,
    };
  if (this.isEditMode) {
    this.profileService.updateUserProfile(this.profile).subscribe({
      next: () => {
        alert('Profile updated!');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => console.error('Update failed', err)
    });
  } else {
    this.profileService.createProfile(this.profile).subscribe({
      next: () => {
        alert('Profile created!');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => console.error('Creation failed', err)
    });
  }
}
}
