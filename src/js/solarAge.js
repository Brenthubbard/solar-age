export default class SolarAge {
  constructor(name, userAge, planet) {
    this.name = name;
    this.userAge = userAge;
    this.planet = planet;
  }
  MercuryAgeConvert() {
    let MercuryAgeConvert = Math.floor(this.userAge / .24);
    return MercuryAgeConvert;
  }
  MercuryYearsLeft() {
    let MercuryYearsLeft = Math.floor(100 - this.userAge);
    let MercuryLifeEx = Math.floor(MercuryYearsLeft / .24);
    return MercuryLifeEx;
  }
  VenusAgeConvert() {
    let VenusAgeConvert = Math.floor(this.userAge / .62);
    return VenusAgeConvert;
  }
  VenusYearsLeft() {
    let VenusYearsLeft = Math.floor(100 - this.userAge);
    let VenusLifeEx = Math.floor(VenusYearsLeft / .62);
    return VenusLifeEx;
  }
  MarsAgeConvert() {
    let MarsAgeConvert = Math.floor(this.userAge / 1.88);
    return MarsAgeConvert;
  }
  MarsYearsLeft() {
    let MarsYearsLeft = Math.floor(100 - this.userAge);
    let MarsLifeEx = Math.floor(MarsYearsLeft / 1.88);
    return MarsLifeEx;
  }
  JupiterAgeConvert() {
    let JupiterAgeConvert = Math.floor(this.userAge / 11.86);
    return JupiterAgeConvert;
  }
  JupiterYearsLeft() {
    let JupiterYearsLeft = Math.floor(100 - this.userAge);
    let JupiterLifeEx = Math.floor(JupiterYearsLeft / 11.86);
    return JupiterLifeEx;
  }
  WhichPlanet() {
    let planet = this.planet;
    let planetAge;
    let yearsLeft;
    let answer;
    if (planet === "mercury") {
      planetAge = this.MercuryAgeConvert();
      yearsLeft = this.MercuryYearsLeft();
    } else if (planet === "venus") {
      planetAge = this.VenusAgeConvert();
      yearsLeft = this.VenusYearsLeft();
    } else if (planet === "mars") {
      planetAge = this.MarsAgeConvert();
      yearsLeft = this.MarsYearsLeft();
    } else if (planet === "jupiter") {
      planetAge = this.JupiterAgeConvert();
      yearsLeft = this.JupiterYearsLeft();
    } else {
      return `You never left!`
    }
    if (yearsLeft < 0) {
      answer = `According to our calculations on the planet ${planet} you are ${planetAge} years old and have a life expectancy on this planet is ${-yearsLeft} years left. You have exceeded your life span by ${-yearsLeft}years on the planet`;
    } else {
      answer = `According to our calculations on the planet ${planet} you are ${planetAge} years old and have a life expectancy on this planet is ${yearsLeft} years left isn't that Great!!!!`;
    }
    return answer;
  }
}
