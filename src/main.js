import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

import SolarAge from './../src/js/solarAge.js';


$(document).ready(function () {
  $('#solarAge').submit(function (event) {
    event.preventDefault();
    let lifeExp = $('#ageLimit').val();
    let currentAge = $('ageInput').val();
    $('.output').show();
  });
  

    // $('#ageOutput').text(`Using your age input of ${userAge} we have calculated that on mercury you would be ${mercuryYearsLeft.SolarAge} years old and you life expectancy would be ${mercuryLifeSpan.SolarAge} )`
  
  
});






