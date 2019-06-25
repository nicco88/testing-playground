import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to add two whole numbers', () => {
    expect(component.add(2, 2)).toEqual(4);
  })

  it('should be able to add a whole number and a negative number', () => {
    expect(component.add(2, -1)).toEqual(1);
  });

  it('should be able to add a whole number and a zero', () => {
    expect(component.add(2, 0)).toEqual(2);
  });
});
