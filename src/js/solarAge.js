


export default class SolarAge {
  constructor(name, userAge) {
    this.name = name;
    this.userAge = userAge;
    // this.userLifeEx = userLifeEx;
  }


  MercuryAgeConvert() {
    let MercuryAgeConvert = Math.floor(this.userAge / .24);
    return MercuryAgeConvert;
}

  
  // yearsLeft() {
  //   let lifeX = (math.floor(this.userLifeEx - this.userAge));
  //   if (lifeX < 0) {
  //     return (lifeX * -1);
  //   } else {
  //     return lifeX;
  //   }

  // mercuryLifeSpan() {
  //   let mercuryLifeSpan = (this.userAge / .24);
  //   return mercuryLifeSpan;
  // }
  // mercuryYearsLeft() {
  //   let mercuryYearsLeft = (this.userAge * .24);
  //   return mercuryYearsLeft
  // }

  // venusLifeSpan() {
  //   let venusLifeSpan = (this.userAge / .62);
  //   return venusLifeSpan;
  // }
  // venusYearsLeft() {
  //   let venusYearsLeft = (this.userAge * .62);
  //   return venusYearsLeft;
  // }
  
  // marsLifeSpan() {
  //   let marsLifeSpan = (this.userAge / 1.88);
  //   return marsLifeSpan;
  // }
  // marsYearsLeft() {
  //   let marsYearsLeft = (this.userAge * 1.88);
  //   return marsYearsLeft;
  // }

  // jupiterLifeSpan() {
  //   let jupiterLifeSpan = (this.userAge / 11.86);
  //   return jupiterLifeSpan;
  // }
  // jupiterYearsLeft() {
  //   let jupiterYearsLeft = (this.userAge * 11.86);
  //   return jupiterYearsLeft;
  // }


  
};


