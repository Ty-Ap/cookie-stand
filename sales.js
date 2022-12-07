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

function Store(name,minCust,maxCust,avgCookiesBought,customerPerHour,cookieSales){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesBought = avgCookiesBought;
  this.total = 0;
  this.customerPerHour = customerPerHour;
  this.cookieSales = cookieSales;
  this.hours = hours;
}

//***********PROTOTYPE METHODS....I HOPE

// Store.prototype.getCust = function () {
//   this.total = `${this.name} had ${randomCust(this.minCust,this.maxCust)} today`;
//   return
// };



Store.prototype.render = function(){
  let articleElem = document.createElement('article');
  storeSection.appendChild(articleElem);

  let h2Elem = document.createElement('h2');
  h2Elem.innerText = this.name;
  articleElem.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  ulElem.innerText = this.minCust;
  articleElem.appendChild(ulElem);

  let p2Elem = document.createElement('p2');
  p2Elem.innerText = this.maxCust;
  articleElem.appendChild(p2Elem);

  let p3Elem = document.createElement('p3');
  p3Elem.innerText = this.avgCookiesBought;
  articleElem.appendChild(p3Elem);

  let p4Elem = document.createElement('p4');
  p4Elem.innertext = this.total;
  articleElem.appendChild(p4Elem);

  let p5Elem = document.createElement('p5');
  p5Elem.innerText = this.total;
  articleElem.appendChild(p5Elem);
};


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

