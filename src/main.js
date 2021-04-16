
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

import SolarAge from './js/solarAge.js';


$(document).ready(function () {
  $('#solarAge').submit(function(event){
    event.preventDefault();
    let lifeExp = $('#ageLimit').val();
    let currentAge = $('ageInput').val();
    $('.output').show();
  })
  yearsLeft() {
    let lifeX = (math.floor(this.userLifeEx - this.userAge));
    if (lifeX < 0) {
      return (lifeX * -1);
    }
  $('#ageOutput').text (`Using your age input of ${ageInput} we have calculated that on mercury you would be ${} and you life expectancy would be 
});






// $(document).ready(function () {
//   $('#triangle-checker-form').submit(function (event) {
//     event.preventDefault();
//     debugger;
//     const length1 = $('#length1').val();
//     const length2 = $('#length2').val();
//     const length3 = $('#length3').val();
//     const triangle = new Triangle(length1, length2, length3);
//     const response = triangle.checkType();
//     $('#response').append("<p>" + response + "</p>");
//   });
// });
