import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

import SolarAge from './../src/js/solarAge.js';


$(document).ready(function () {
  $('#solarAge').submit(function (event) {
    event.preventDefault();
    const name = $('#name').val();
    const age = $('#userAge').val();
    const planet = $('#planet').val();
    const solarAge = new SolarAge(name, age, planet);
    let answer = solarAge.WhichPlanet();
    $('.output').show();
    $('.output').text(answer);
  });
  
  
});






