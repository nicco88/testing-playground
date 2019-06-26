## Pseudocode

```js
  describe( 'ball' )
    it( 'is round' )
      expect( earth.isRound.toBe( true ) )
    it( 'is blue' )
      expect( earth.color.toBe( 'blue') )
```

## Matchers

- `toBe` / `not.toBe` - compare with ===
- toBeCloseTo - see if two values are similar, but not exactly the same
  `expect(number).toBeCloseTo(42.2, 3);`
- `toBeDefined` checks if a value is or isn't `undefined`
- `toBeFalsey` / `toBeTruthy`
- `toBeGreaterThan` / `toBeLessThan`
- `toContain` to see if a value is contained in an array, or a substring in a string
- `toEqual` compares two different objects
- `jasmine.any()` checks the type of a value 


