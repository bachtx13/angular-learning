import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableExAComponent } from './observable-ex-a.component';

describe('ObservableExAComponent', () => {
  let component: ObservableExAComponent;
  let fixture: ComponentFixture<ObservableExAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableExAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableExAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
