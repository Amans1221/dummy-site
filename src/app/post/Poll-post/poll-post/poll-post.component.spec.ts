import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollPostComponent } from './poll-post.component';

describe('PollPostComponent', () => {
  let component: PollPostComponent;
  let fixture: ComponentFixture<PollPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PollPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
