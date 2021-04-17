
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

import SolarAge from './js/solarAge.js';


$(document).ready(function () {
  $('#solarAge').submit(function (event) {
    event.preventDefault();
    let lifeExp = $('#ageLimit').val();
    let currentAge = $('ageInput').val();
    $('.output').show();
    debugger;
    console.log('pageloaded');
  });
  yearsLeft() {
    let lifeX = (math.floor(this.userLifeEx - this.userAge));
    if (lifeX < 0) {
      return (lifeX * -1);
    } else {
      return lifeX;
    }

    $('#ageOutput').text(`Using your age input of ${ageInput} we have calculated that on mercury you would be ${mercuryYearsLeft.SolarAge} years old and you life expectancy would be ${mercuryLifeSpan.SolarAge} )`
});






