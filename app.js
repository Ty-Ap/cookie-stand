// needs a proof of concept application to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

// TODO The minimum number of customers per hour.
// TODO The maximum number of customers per hour.
// TODO The average number of cookies purchased per customer.
// TODO Because we are early in the life of this business, we will need to build an application that is adaptable.
// TODO create separate JS object literals for each shop location. Each location will be responsible for generating sales data and providing output on an html document.
//TODO Store the min/max hourly customers, and the average cookies per customer, in object properties.
//TODO Use a method of that object to generate a random number of customers per hour. Objects/Math/random
//TODO Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
//TODO Store the results for each location in a separate array… perhaps as a property of the object representing that location.
//TODO Display the values of each array as unordered lists in the browser.
//TODO Calculating the sum of these hourly totals
//***********************GLOBALS**************************************************
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

// *********************UTILITIES*************************************************
function rngCookies(minCust, maxCust) {
  minCust = Math.ceil(minCust);
  maxCust = Math.floor(maxCust);
  return Math.floor(Math.random() * (maxCust - minCust +1) + minCust);
}

//found on MDN docs
let cph = 0;

function rngHourly(){
  for(let i = 0; i < hours.length; i++){
    cph = [rngCookies[i]];
    return cph;
    //let cphArray= [cph];
    //return cphArray;
  }
}

// objectTemplate
// let ={
//   name: '',
//   minCust:  ,
//   maxCust: ,
//   avgCookiesBought:
//   cookiesBought: [],
// };
//******************************** OBJECT LITERALS********************************

let tokyo ={
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiesBought: 1.2,
  cookiesBought: [],
  customerPerHour: rngHourly(3,24),
};

console.log(tokyo);

let seattle ={
  name: 'Seattle',
  minCust:  23,
  maxCust: 65,
  avgCookiesBought: 6.3,

  cookiesBought: [],
};

let dubai ={
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiesBought: 3.7,
  cookiesBought: [],
};

let paris={
  name: 'Paris',
  minCust:  20,
  maxCust: 38,
  avgCookiesBought: 2.3,
  cookiesBought: [],
};

let lima={
  name: 'Lima',
  minCust:  2,
  maxCust: 16,
  avgCookiesBought: 4.6,
  cookiesBought: [],
};

