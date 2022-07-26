//a.Get all the countries from Asia continent /region using Filter function:


const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/region/asia", true);

request.onload = function (e) {
    var response = JSON.parse(request.responseText);
    
        response.filter(element => {
            console.log(element.continents)
        })

}
request.send(null); 

// b. Get all the countries with a population of less than 2 lakhs using Filter function:

{/*
const request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all", true);

request.onload = function (e) {
    var response = JSON.parse(request.responseText);
    
        response.filter(element => {
            console.log(element.population<200000)
            console.log(element.name)
        })

}
request.send(null); 
*/}

// c. Print the following details name, capital, flag using forEach function:

{ /*
const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.onload = function (e) {
    var response = JSON.parse(request.responseText);
    response.forEach(element =>  {
        console.log(element.name);
        console.log(element.flag);
        console.log(element.capital)
        
    })

}
request.send(null); 

*/}


// d .Print the total population of countries using reduce function:

{/*

const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.onload = function (e) {
    var response = JSON.parse(request.responseText);
    response.reduce(element =>  {
        console.log(element.population);
       
    })

}
request.send(null); 

*/ }

// e. Print the country which uses US Dollars as currency.

{/*
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);

request.onload = function (e) {
    var response = JSON.parse(request.responseText);
    response.forEach(element =>  {
        console.log(element.name);
        console.log(element.currencies.USD)
       
    })

}
request.send(null);

*/}

