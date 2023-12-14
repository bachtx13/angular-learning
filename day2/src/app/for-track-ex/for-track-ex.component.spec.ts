import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForTrackExComponent } from './for-track-ex.component';

describe('ForTrackExComponent', () => {
  let component: ForTrackExComponent;
  let fixture: ComponentFixture<ForTrackExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForTrackExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForTrackExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
