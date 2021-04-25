import SolarAge from './../src/js/solarAge.js';
// import solarAge from '../src/solarAge.js';
// import solarAge from '../src/main.js';

describe('SolarAge', () => {
  
  let age; beforeEach(() => {
    age = new SolarAge("Neil", 85 )
  });
  test('converting user age into mercury age', () => {
    expect(age.MercuryAgeConvert()).toEqual(354)
  });
  test('check equation for age left for Mercury', () => {
      expect(age.MercuryYearsLeft()).toEqual(62)
  });
  test('converting userAge into Venus age', () => {
    expect(age.VenusAgeConvert()).toEqual(137)
  });
  test('Check equation for age left for Venus', () => {
    expect(age.VenusYearsLeft()).toEqual(24)
  })
  test('make sure the userAge is converting', () => {
    expect(age.MarsAgeConvert()).toEqual(45)
  })
  test('Check equation for age left for Mars', () => {
expect(age.MarsYearsLeft()).toEqual(7)
  })
  test('Check if userAge is converting for Jupiter', () => {
    expect(age.JupiterAgeConvert()).toEqual(7)
  })
  // test()
});
  
