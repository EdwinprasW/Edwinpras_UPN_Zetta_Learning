import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTwoThreeComponent } from './component-two-three.component';

describe('ComponentTwoThreeComponent', () => {
  let component: ComponentTwoThreeComponent;
  let fixture: ComponentFixture<ComponentTwoThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTwoThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTwoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
