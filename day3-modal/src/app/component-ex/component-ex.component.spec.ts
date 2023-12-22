import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExComponent } from './component-ex.component';

describe('ComponentExComponent', () => {
  let component: ComponentExComponent;
  let fixture: ComponentFixture<ComponentExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
