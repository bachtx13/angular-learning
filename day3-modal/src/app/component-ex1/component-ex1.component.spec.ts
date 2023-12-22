import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEx1Component } from './component-ex1.component';

describe('ComponentEx1Component', () => {
  let component: ComponentEx1Component;
  let fixture: ComponentFixture<ComponentEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentEx1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
