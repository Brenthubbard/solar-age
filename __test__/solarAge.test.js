import SolarAge from './../src/js/solarAge.js';
// import solarAge from '../src/solarAge.js';
// import solarAge from '../src/main.js';

describe('SolarAge', () => {
  
  let age; beforeEach(() => {
    age = new SolarAge("Neil", 85, "earth")
  });
  test('converting user age into mercury age', () => {
    age.planet = "mercury"
    expect(age.MercuryAgeConvert()).toEqual(354)
  });
  test('check equation for age left for Mercury', () => {
    age.planet = "mercury"  
    expect(age.MercuryYearsLeft()).toEqual(62)
  });
  test('converting userAge into Venus age', () => {
    age.planet = "venus"
    expect(age.VenusAgeConvert()).toEqual(137)
  });
  test('Check equation for age left for Venus', () => {
    age.planet = "venus"
    expect(age.VenusYearsLeft()).toEqual(24)
  })
  test('make sure the userAge is converting', () => {
    age.planet = "mars"
    expect(age.MarsAgeConvert()).toEqual(45)
  })
  test('Check equation for age left for Mars', () => {
    age.planet = "mars"
expect(age.MarsYearsLeft()).toEqual(7)
  })
  test('Check if userAge is converting for Jupiter', () => {
    age.planet = "jupiter"
    expect(age.JupiterAgeConvert()).toEqual(7)
  })
  test('checking the equation for years left', () => {
    age.planet = "jupiter"
    expect(age.JupiterYearsLeft()).toEqual(1);
  })
  test('check for the answer in conditional', () => {
    expect(age.WhichPlanet()).toEqual(`You never left!`)
  })
  test('check for mercury planet age with years remaining', () => {
  age.planet = "mercury"
    expect(age.WhichPlanet()).toEqual(`According to our calculations on the planet mercury you are ${354} years old and have a life expectancy on this planet is ${62} years left isn't that Great!!!!`)
  })
  test('check for Jupiter age with life span exceeded', () => {
    age.planet = "jupiter"
    age.userAge = 105
    expect(age.WhichPlanet()).toEqual(`According to our calculations on the planet jupiter you are 8 years old and have a life expectancy on this planet is ${1} years left. You have exceeded your life span by ${1} on the planet`)
  })
  test('make sure the mars age with time remaining is correct', () => {
    age.planet = "mars"
    expect(age.WhichPlanet()).toEqual(`According to our calculations on the planet mars you are ${45} years old and have a life expectancy on this planet is ${7} years left isn't that Great!!!!`)
  })
  test('Make sure that venus user age remaining is correct', () => {
    age.planet = "venus"
    expect(age.WhichPlanet()).toEqual(`According to our calculations on the planet venus you are ${137} years old and have a life expectancy on this planet is ${24} years left isn't that Great!!!!`)
  })
  
});
  
