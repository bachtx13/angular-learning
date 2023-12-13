import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExBComponent } from './ex-b.component';

describe('ExBComponent', () => {
  let component: ExBComponent;
  let fixture: ComponentFixture<ExBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
