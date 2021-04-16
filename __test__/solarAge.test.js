import SolarAge from '../src/solarAge.js';
// import solarAge from '../src/solarAge.js';
// import solarAge from '../src/main.js';







describe('SolarAge', () => {
  
  let age = new SolarAge();

  beforeEach( () => {
  });

  test('create a age object using the solarAge constructor', () => {
    expect(age);
  });
  test('create objects using the constructor', () => {
    expect(age.name).toEqual();
    expect(age.userLifeEx).toEqual(100);
    expect(age.userAge).toEqual();
    expect(age.planetTime).toEqual([]);
  })
    
  test('create a function to run age calculation', () => {
    expect(age.yearsToLive());
  })
    
  
  
});
  
  
  











  // const triangle = new Triangle(2, 4, 5);
  // expect(triangle.side1).toEqual(2);
  // expect(triangle.side2).toEqual(4);
  // expect(triangle.side3).toEqual(5);

  // test('should correctly determine whether three lengths are not a triangle', () => {
  //   const notTriangle = new Triangle(3, 9, 22);
  //   expect(notTriangle.checkType()).toEqual("not a triangle");
  // });
  // test('should correctly determine whether three lengths make a scalene triangle', () => {
  //   const scalTriangle = new Triangle(4, 5, 7)
  //   expect(scalTriangle.checkType()).toEqual("scalene triangle");
  // });