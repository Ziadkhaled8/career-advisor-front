import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBuilderComponent } from './profile-builder.component';

describe('ProfileBuilderComponent', () => {
  let component: ProfileBuilderComponent;
  let fixture: ComponentFixture<ProfileBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
