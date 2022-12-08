'use strict';

//***********************GLOBALS**************************************************

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let storeArray = [];

// function randomCust(minCust,maxCust){
//   return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) +this.minCust);
// }


//^this is = kittenCaboodle on demo

//WINDOW INTO DOM TEST
let storeSection = document.getElementById('stores');

// *********************UTILITIES*************************************************



//*********************CONSTRUCTOR FUNCTION

function Store(name,minCust,maxCust,avgCookiesBought){
function Store(name,minCust,maxCust,avgCookiesBought){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesBought = avgCookiesBought;
  this.total = 0;
  this.cookieSales = [];
  this.hours = hours;
}

//***********PROTOTYPE METHODS....I HOPE

Store.prototype.getCust = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) +this.minCust);
};

Store.prototype.cookieHr = function (){
  for(let i=0; i < hours.length; i++){
    let cookies = Math.ceil(this.getCust()*this.avgCookiesBought);
    this.cookieSales.push(cookies);
    this.total += cookies;
  }
};


Store.prototype.render = function(){
  this.cookieHr();

  let row = document.createElement('tr');
  storeSection.appendChild(row);


let Tokyo = new Store('Tokyo',3,24,1.2,[],0);
let Seattle = new Store('Seattle',23,65,6.3,[],0);
let Dubai = new Store('Dubai',11,38,3.7,[],0);
let Paris = new Store('Paris',20,38.,2.3,[],0);
let Lima = new Store('Lima',2,16,4.6,[],0);


storeArray.push=[Tokyo, Seattle, Dubai, Paris, Lima ];


  let cell = document.createElement('td');
  cell.textContent = this.name;
  row.appendChild(cell);
  for(let i = 0; i < hours.length; i++ ){
    let cell = document.createElement('td');
    cell.textContent = this.cookieSales[i];
    row.appendChild(cell);
  }
// storeArray = [{Tokyo}, {Seattle}];

  let total = document.createElement('td');
  total.textContent = this.total;
  row.appendChild(total);
};

let header = function(){

  let row = document.createElement('tr');
  storeSection.appendChild(row);

  let cell = document.createElement('td');
  cell.textContent = '';
  row.appendChild(cell);
  for(let i = 0; i < hours.length; i++ ){
    let cell = document.createElement('td');
    cell.textContent = hours[i];
    row.appendChild(cell);
  }

  let total = document.createElement('td');
  total.textContent = 'total';
  row.appendChild(total);
};

header();
// footer almost same but after renderall, w nested for loop

let tokyo = new Store('Tokyo',3,24,1.2);
let seattle = new Store('Seattle',23,65,6.3);
let dubai = new Store('Dubai',11,38,3.7);
let paris = new Store('Paris',20,38.,2.3);
let lima = new Store('Lima',2,16,4.6);


storeArray.push(tokyo, seattle, dubai, paris, lima );

//storeArray = [{tokyo}, {seattle}];



function renderAll(){
  for(let i = 0;i<storeArray.length; i++){
    // renderHelper[i].randomCust();
    storeArray[i].render();
  }
}

renderAll();

