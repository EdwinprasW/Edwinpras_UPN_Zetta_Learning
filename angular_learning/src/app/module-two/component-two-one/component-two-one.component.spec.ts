import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTwoOneComponent } from './component-two-one.component';

describe('ComponentTwoOneComponent', () => {
  let component: ComponentTwoOneComponent;
  let fixture: ComponentFixture<ComponentTwoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTwoOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
