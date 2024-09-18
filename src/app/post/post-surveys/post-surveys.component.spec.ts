import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSurveysComponent } from './post-surveys.component';

describe('PollSurveysComponent', () => {
  let component: PostSurveysComponent;
  let fixture: ComponentFixture<PostSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostSurveysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
