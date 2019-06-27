import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable, from } from 'rxjs';

let component: TestComponent;
let fixture: ComponentFixture<TestComponent>;

beforeAll(async( () => {
  TestBed.configureTestingModule({
    declarations: [TestComponent],
    imports: [HttpClientModule]
  })
  .compileComponents();
}))

beforeAll(() => {
  fixture = TestBed.createComponent(TestComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

// let globalArr = [];

// beforeAll( () => {
//   globalArr = [1, 2, 3]; // AVAILABLE TO ALL, NOT ALWAYS BEST SOLUTION
// })

describe('TestComponent', () => {
  // let component: TestComponent;
  // let fixture: ComponentFixture<TestComponent>;


  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ TestComponent ],
  //     imports: [HttpClientModule]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TestComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

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
    });
    it('returns the new length', () => {
      expect(arr.unshift(1000)).toBe(4);
    });
  })

  describe('#push', () => {
    it('it adds elements to the end of an array', () => {
      arr.push(99);
      expect(arr[arr.length - 1]).toBe(99);
    });
    it('returns the new length', () => {
      expect(arr.push(99)).toBe(4);
    });
  });
});

// Pending specs
describe('Pending specs', () => {
  xit('can start with an xit', () => {
    expect(true).toBe(true);
  });

  it('is pending if there is no callback in the callback function');

  it('is pending if `pending()` is invoked inside the callback', () => {
    expect(2).toBe(2);
    pending();
  });
});

// spy
describe('multiply', () => {
  let multiplySpy, result;

  beforeEach(() => {

    multiplySpy = spyOn(component, 'multiply').and.callThrough();
    result = multiplySpy(2, 3);
  });

  it('can have params tested', () => {
    // Here we want to make sure that the function is called
    expect(multiplySpy).toHaveBeenCalled();
    expect(multiplySpy).toHaveBeenCalledWith(2, 3);
  });

  it('can have a return value tested', () => {
    // testing frequency
    expect(multiplySpy.calls.any()).toBe(true);
    expect(multiplySpy.calls.count()).toBe(1);
    // testing outcome
    expect(result).toEqual(6);
  });

  // it('should call the getPostsQuery$ and generate fake data', () => {
  //   spyOn(component, 'getPostsQuery$').and.callFake( () => {
  //     return from([ 1, 2, 3]);
  //   })

  //   component.ngOnInit();

  //   expect(component.posts.length).toBeGreaterThan(0);
  // });

});

describe('a simple timeout', () => {
  let sample;

  beforeEach(() => {
    sample = jasmine.createSpy('sampleFunction');
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('is only invoked after 1000 ms', () => {
    setTimeout( () => {
      sample();
    }, 1000);
    jasmine.clock().tick(999);
    expect(sample).not.toHaveBeenCalled();
    jasmine.clock().tick(1);
    expect(sample).toHaveBeenCalled();
  });
});

describe('a simple interval', () => {
  let dummyFunction;
  beforeEach(() => {
    dummyFunction = jasmine.createSpy('dummyFunction');
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('checks to see the number of times the function is invoked', () => {
    setInterval(() => {
      dummyFunction();
    }, 1000);
    jasmine.clock().tick(999);
    expect(dummyFunction.calls.count()).toBe(0);
    jasmine.clock().tick(1000);
    expect(dummyFunction.calls.count()).toBe(1);
    jasmine.clock().tick(1);
    expect(dummyFunction.calls.count()).toBe(2);
  });
});

describe('#getPostsQuery', () => {

  it('returns a list of posts', ( done ) => { // <<<--- done is very important for async functions!!
    component.getPostsQuery$()
      .subscribe(
        (data: Array<any>) => {
          expect(data).toBeTruthy();
          expect(data.length).toBeGreaterThan(0);
          console.log("TCL: data", data)

          done(); // <<<---
        }
      )
  });
});

describe('#compute', () => {

  it('should return 0 if input is negative', () => {
    expect(component.compute(-1)).toBe(0);
  })
  it('should return a number incremented by 1, if input is positive', () => {
    expect(component.compute(2)).toBe(3);
  })
});

describe('#greet', () => {
  it('should include the name in the message', () => {
    expect(component.greet('Nicco')).toContain('Nicco');
  });
});

describe('#getCurrencies', () => {
  it('should return the supported currencies', () => {
    expect(component.getCurrencies()).toContain('TWD');
    expect(component.getCurrencies()).toContain('EUR');
    expect(component.getCurrencies()).toContain('USD');
  });
});

describe('voting', () => {
  beforeEach(() => {
    component.totalVotes = 0;
  });
  it('should increment totalVotes when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });
  it('should decrement totalVotes when downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });

  it('should raise voteChanged event when upvoted', () => {
    // arrange
    let totalVotes = null;
    component.voteChanged.subscribe(
      val => {
        totalVotes = val;
      }
    );

    // act
    component.upVote();

    // assert
    // expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);
  });
})


