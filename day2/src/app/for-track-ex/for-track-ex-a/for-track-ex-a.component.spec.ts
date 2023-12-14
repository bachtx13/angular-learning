import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTrackExAComponent } from './for-track-ex-a.component';

describe('ForTrackExAComponent', () => {
  let component: ForTrackExAComponent;
  let fixture: ComponentFixture<ForTrackExAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForTrackExAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForTrackExAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
