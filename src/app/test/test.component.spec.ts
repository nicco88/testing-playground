import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

let globalArr = [];

beforeAll( () => {
  globalArr = [1, 2, 3];
})

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

  it('should have a car with 4 wheels', () => {
    expect(component.carOne.wheels).toEqual(4);
  })

  it('should have a car with blue color', () => {
    expect(component.carOne.color).toBe('blue')
  })

  it('should have a carTwo which has the same values as carOne', () => {
    expect(component.carTwo).toEqual(component.carOne)
  })

  it('should have an arrOne that has the same values as arrTwo', () => {
    expect(component.arrOne).toEqual(component.arrTwo)
  })

  it('has numOne that is very close, but not necessarely the same to numTwo', () => {
    expect(component.numOne).toBeCloseTo(component.numTwo, 3); // 2 decimals points
  })

  it('should have arrOne as an array', () => {
    expect(component.arrOne).toEqual(jasmine.any(Array))
  })

  it('should have the zero variable to be falsy', () => {
    expect(component.zero).toBeFalsy();
  })

  it('should have arrOne length to be truthy', () => {
    expect(component.arrOne.length).toBeTruthy();
  })

  it('should have arrOne containing the number 3', () => {
    expect(component.arrOne).toContain(3);
  })

  it("should have a carOne object with a property color and a value 'blue'", () => {
    expect(component.carOne).toEqual(jasmine.objectContaining({ color: 'blue' }))
  })
});


describe('Counting', () => {
  var count = 0;

  beforeEach( () => {
    count++;
  });

  afterEach( () => {
    count = 0;
  });

  it('has a counter that increments', () => {
    expect(count).toBe(1);
  })

  it('gets reset', () => {
    expect(count).toBe(1);
  });
})

// nesting describe
describe( 'Array', () => {
  let arr;

  beforeEach( () => {
    arr = [1, 2, 3];
  });

  describe('#unshift', () => {
    it('adds a number at the beginning of the array', () => {
      arr.unshift(10);
      expect(arr[0]).toBe(10);
    })
  })
})
