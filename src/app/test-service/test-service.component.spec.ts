import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestServiceComponent } from './test-service.component';
import { TestServiceService, Data } from '../services/test-service.service';
import { defer } from 'rxjs';

describe('TestServiceComponent', () => {
  let component: TestServiceComponent;
  let fixture: ComponentFixture<TestServiceComponent>;

  let hdsSpy: TestDataServiceSpy;

  class TestDataServiceSpy {
    testData: Data[] = [
      { id: 1, name: 'Test 1' },
      { id: 2, name: 'Test 2' },
      { id: 3, name: 'Test 3' },
      { id: 4, name: 'Test 4' },
      { id: 5, name: 'Test 5' },
    ];

    /* emit cloned test hero */
    GetData = jasmine.createSpy('GetData').and.callFake(
      () => {
        return defer(() => Promise.resolve(Object.assign({}, this.testData)));
      }
    );
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestServiceComponent ],
      providers: [
        { provide: TestServiceService }
      ]
    })
    .overrideComponent(TestServiceComponent, {
      set: {
        providers: [
          { provide: TestServiceService, useClass: TestDataServiceSpy }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    hdsSpy = fixture.debugElement.injector.get(TestServiceService) as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have called `GetData`', () => {
    expect(hdsSpy.GetData.calls.count()).toBe(1, 'GetData called once');
  });
});
