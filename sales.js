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

function header(){
  let trElem = document.createElement('tr');
  storeSection.appendChild(trElem);

  let thElem = document.createElement('th');
  thElem.textContent = 'stores';
  trElem.appendChild(thElem);

  for (let j = 0; j < hours.length; j++) {
    thElem = document.createElement('th');
    thElem.textContent = hours[j];
    trElem.appendChild(thElem);
  }
  thElem = document.createElement('th');
  thElem.textContent = 'total';
  trElem.appendChild(thElem);
}

header();

Store.prototype.render = function() {

  console.dir('stores', storeSection);
  let trElem = document.createElement('tr');
  storeSection.appendChild(trElem);

  let tdElem = document.createElement('td');
  tdElem.textContent = this.name;
  trElem.appendChild(tdElem);

  for (let i = 0; i < hours.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = this.cookiesBought[i];
    console.log(this.cookiesBought[i]);

    trElem.appendChild(tableData);

  }
  let totalTableData = document.createElement('td');
  totalTableData.textContent = this.total;
  trElem.appendChild(totalTableData);
};

let grandTotals = document.createElement('tr');
storeSection.appendChild(grandTotals);


//*********************CONSTRUCTOR FUNCTION

function Store(name,minCust,maxCust,avgCookiesBought){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesBought = [];
  this.total = 0;
}

//***********PROTOTYPE METHODS....I HOPE

// Store.prototype.getCust = function () {
//   this.total = `${this.name} had ${randomCust(this.minCust,this.maxCust)} today`;
//   return
// };





let Tokyo = new Store('Tokyo',3,24,1.2,[],0);
let Seattle = new Store('Seattle',23,65,6.3,[],0);
let Dubai = new Store('Dubai',11,38,3.7,[],0);
let Paris = new Store('Paris',20,38.,2.3,[],0);
let Lima = new Store('Lima',2,16,4.6,[],0);


storeArray.push=[Tokyo, Seattle, Dubai, Paris, Lima ];


// storeArray = [{Tokyo}, {Seattle}];



// function renderAll(){
//   for(let i = 0;i<storeArray.length; i++){
//     // renderHelper[i].randomCust();
//     storeArray[i].render();
//   }
// }

// renderAll();

Store.prototype.getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


Store.prototype.cookieSales = function () {
  for (let i = 0; i < hours.length; i++) {
    let avgCookie = Math.floor(this.getRandomInt(this.minCust, this.maxCust) * this.avgCookiesBought);
    this.cookiesBought.push(avgCookie);
    this.total = this.total + this.cookiesBought[i];
  }
};


Seattle.cookieSales();
Tokyo.cookieSales();
Dubai.cookieSales();
Paris.cookieSales();
Lima.cookieSales();

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();


console.log(Seattle);
console.log(Tokyo);
console.log(Dubai);
console.log(Paris);
console.log(Lima);
