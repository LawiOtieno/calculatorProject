// Addition
var add = function(number1, number2){
    return number1 + number2
};
var number1 = parseInt(prompt('Enter first number'));
var number2 = parseInt(prompt('Enter second number'));
var result = add(number1, number2);
alert("When you add " +number1+ " and " +number2+ " answer is: " +result);


// Subtraction
var subract = function(number1, number2){
    return number1 - number2
};
var number1 = parseInt(prompt('Enter first number'));
var number2 = parseInt(prompt('Enter second number'));
var result = subract(number1, number2);
alert("When you subract " +number1+ " and " +number2+ " answer is: " +result);


// Multiplication
var multiply = function(number1, number2){
    return number1 * number2
};
var number1 = parseInt(prompt('Enter first number'));
var number2 = parseInt(prompt('Enter second number'));
var result = multiply(number1, number2);
alert("When you multiply " +number1+ " and " +number2+ " answer is: " +result);


// Division
var divide = function(number1, number2){
    return number1 / number2
};
var number1 = parseInt(prompt('Enter first number'));
var number2 = parseInt(prompt('Enter second number'));
var result = divide(number1, number2);
alert("When you divide " +number1+ " and " +number2+ " answer is: " +result);


// // BMI Calculator - {(weight)/(height)2 where weight is in kilograms and height in metres and squared}
// var mass = function(weight, height){
//     return (weight*10000)/(height*height)
// };
// var weight = parseInt(prompt('Enter your weight in Kilograms'));
// var height = parseInt(prompt('Enter your height in Metres'));
// var bmi = mass(weight, height)
// alert('Your BMI is: ' +bmi)


// // Function that converts temperature between Celsius and Fahrenheit. T(°C) = (T(°F) - 32) × 5/9 ,,, T(°F) = T(°C) × 9/5 + 32
// var temperature = function(celsius){
//     return (celsius * (9/5)) + 32
// };
// var celsius = parseInt(prompt('Enter your temperature in Celsius, °C'));
// var fahrenheit = temperature(celsius);
// alert('This temperature: ' +celsius+ '°C is equivalent to: ' +fahrenheit+ '°F')

// var temperature = function(fahrenheit){
//     return (fahrenheit-32) * (5/9)
// };
// var fahrenheit = parseInt(prompt('Enter your temperature in Fahrenheit, °F'));
// var celsius = temperature(fahrenheit);
// alert('This temperature: ' +fahrenheit+ '°F is equivalent to: ' +celsius+ '°C')