


export default class SolarAge {
  constructor(name, userAge) {
    this.name = name
    this.userLifeEx = 100;
    this.userAge = userAge;
    this.planetTime = [];
  
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



// plant() {
//   const mercury = this.calc
// }

//   calc() {
//     const yearsLeft =this.userLifeEx / this.planetTime;
//     // yearsLeft / planetAge = planetTime;
// }


// const mercury = new SolarAge('mercury', this.userLifeEx, this.userAge, [.24]);
// const venus = new SolarAge('venus', this.userLifeEx, this.userAge, [.62]);
// const mercury = new SolarAge('mercury', this.userLifeEx, this.userAge, [1.88]);
// const mercury = new SolarAge('mercury', this.userLifeEx, this.userAge, [11.86]);