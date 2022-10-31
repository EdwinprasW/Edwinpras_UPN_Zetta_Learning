import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTwoTwoComponent } from './component-two-two.component';

describe('ComponentTwoTwoComponent', () => {
  let component: ComponentTwoTwoComponent;
  let fixture: ComponentFixture<ComponentTwoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTwoTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTwoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
