import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExAComponent } from './ex-a.component';

describe('ExAComponent', () => {
  let component: ExAComponent;
  let fixture: ComponentFixture<ExAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
