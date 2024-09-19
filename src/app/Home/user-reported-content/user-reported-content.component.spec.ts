import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReportedContentComponent } from './user-reported-content.component';

describe('UserReportedContentComponent', () => {
  let component: UserReportedContentComponent;
  let fixture: ComponentFixture<UserReportedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserReportedContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReportedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
