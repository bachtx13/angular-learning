import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableExBComponent } from './observable-ex-b.component';

describe('ObservableExBComponent', () => {
  let component: ObservableExBComponent;
  let fixture: ComponentFixture<ObservableExBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableExBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableExBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
