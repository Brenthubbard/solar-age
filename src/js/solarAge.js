


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
  // JupiterAgeConvert() {
  //   let JupiterAgeConvert = Math.floor(100 - this.userAge);
  //   return JupiterAgeConvert;
  // }


// jupiter 11.86





  
};


