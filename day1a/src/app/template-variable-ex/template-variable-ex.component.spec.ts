import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariableExComponent } from './template-variable-ex.component';

describe('TemplateVariableExComponent', () => {
  let component: TemplateVariableExComponent;
  let fixture: ComponentFixture<TemplateVariableExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateVariableExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateVariableExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
