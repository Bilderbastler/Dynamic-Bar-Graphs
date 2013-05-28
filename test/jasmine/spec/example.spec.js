describe("one tautology", function() {
  it("is a tautology", function() {
    expect(true).toBeTruthy();
  });

  describe("is awesome", function() {
    it("is awesome", function() {
      expect(1).toBe(1);
    });
  });
});

describe("simple tests", function() {
  it("increments", function() {
    var mike = 0;

    expect(mike++ === 0).toBeTruthy();
    expect(mike === 1).toBeTruthy();
  });

  it("increments (improved)", function() {
    var mike = 0;

    expect(mike++).toBe(0);
    expect(mike).toBe(1);
  });
});

describe("setUp/tearDown", function() {
  beforeEach(function() {
    // console.log("Before");
  });

  afterEach(function() {
    // console.log("After");
  });

  it("example", function() {
    // console.log("During");
  });

  describe("setUp/tearDown", function() {
    beforeEach(function() {
      // console.log("Before2");
    });

    afterEach(function() {
      // console.log("After2");
    });

    it("example", function() {
      // console.log("During Nested");
    });
  });
});

describe("async", function() {
  it("multiple async", function() {
    var semaphore = 2;

    setTimeout(function() {
      expect(true).toBeTruthy();
      semaphore--;
    }, 500);

    setTimeout(function() {
      expect(true).toBeTruthy();
      semaphore--;
    }, 500);

    waitsFor(function() { return semaphore === 0 });
  });
});

describe('built-in matchers', function() {

  describe('toBeTruthy', function() {
    it('passes if subject is true', function() {
      expect(true).toBeTruthy();
      expect(false).not.toBeTruthy();
    });
  });

  describe('toBeFalsy', function() {
    it('passes if subject is false', function() {
      expect(false).toBeFalsy();
      expect(true).not.toBeFalsy();
    });
  });

  describe('toBeDefined', function() {
    it('passes if subject is not undefined', function() {
      expect({}).toBeDefined();
      expect(undefined).not.toBeDefined();
    });
  });

  describe('toBeNull', function() {
    it('passes if subject is null', function() {
      expect(null).toBeNull();
      expect(undefined).not.toBeNull();
      expect({}).not.toBeNull();
    });
  });

  describe('toEqual', function() {
    it('passes if subject and expectation are equivalent', function() {
      expect('Hello World!').toEqual('Hello World!');
      expect('Hello World!').not.toEqual('Goodbye!');
      expect('Hello World!').toNotEqual('Hi!');
      expect([1, 2, 3]).toEqual([1, 2, 3]);
      expect(1).toEqual(1);
      expect({ foo: 1 }).toEqual({ foo: 1 });
    });
  });

  describe('toBeCloseTo', function() {
    it('checks that the expected item is equal to the actual item up to a given level of decimal precision ', function() {
      expect(1.223).toBeCloseTo(1.22);
      expect(1.233).not.toBeCloseTo(1.22);
      expect(1.23326).toBeCloseTo(1.23324, 3);
    });
  });

  describe('toContain', function() {
    it('passes if the expected item is an element in the actual array', function() {
      expect([1, 2, 3]).toContain(2);
      expect([1, 2, 3]).not.toContain(4);
    });
  });

  describe('toMatch', function() {
    it('compares the actual to the expected using a regular expression', function() {
      expect('Hello Jasmine').toMatch(/jasmine/i);
      expect('phone: 123-45-67').toMatch(/\d{3}-\d{2}-\d{2}/);
    });
  });

  describe('toBeGreaterThan', function() {
    it('passes if the actual value is greater than the expected value', function() {
      expect(2).toBeGreaterThan(1);
    });
  });

  describe('toBeLessThan', function() {
    it('passes if the actual value is less than the expected value', function() {
      expect(2).toBeLessThan(3);
    });
  });

  describe('toThrow', function() {
    it('checks that the expected exception was thrown by the actua', function() {
      var object = {
        doSomething: function() {
          throw new Error("Unexpected error!")
        }
      };
      expect(object.doSomething).toThrow(new Error("Unexpected error!"));
    });
  });
});
describe('how to spy', function(){
	var obj;
	
	//How to spy on a method?
	spyOn(obj, 'method') // assumes obj.method is a function
	
	//How to verify it was called?
	expect(obj.method).toHaveBeenCalled()

	//How to verify it was called with specific arguments?
	expect(obj.method).toHaveBeenCalledWith('foo', 'bar')

	//How many times was it called?
	obj.method.callCount

	//What were the arguments to the last call?
	obj.method.mostRecentCall.args

	//How to reset all the calls made to the spy so far?
	obj.method.reset()

	//How to make a standalone spy function?
	var dummy = jasmine.createSpy('dummy')
	$('button#mybutton').click(dummy)

	//How to have spied method also calls through to the real function?
	spyOn(obj, 'method').andCallThrough()

	//How to get all arguments for all calls that have been made to the spy?
	obj.method.argsForCall // this is an array

	//How do I fix the return value of a spy?
	spyOn(obj, 'method').andReturn('Pow!')
});