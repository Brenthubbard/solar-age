


export default class SolarAge {
  constructor(name, userAge) {
    this.name = name
    this.userLifeEx = 100;
    this.userAge = userAge;
    this.ageOnPlanet = [];
  
  }
  yearsLeft() {
    const yearsLeft = this.userLifeEx - this.userAge;
    return yearsLeft;
  }
  

  mercuryLifeSpan() {
    let mercuryLifeSpan = (this.userAge / .24);
    return mercuryLifeSpan;
  }

  
  venusLifeSpan() {
    let venusLifeSpan = (this.userAge / .62);
    return venusLifeSpan;
  }
  
  marsLifeSpan() {
    let marsLifeSpan = (this.userAge / 1.88);
    return marsLifeSpan;
  }

  jupiterLifeSpan() {
    let jupiterLifeSpan = (this.userAge / 11.86);
    return jupiterLifeSpan;
  }


  
};

// const planetTime = yearsLeft / planetAge;
