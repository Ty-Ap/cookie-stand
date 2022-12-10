'use strict';

//***********************GLOBALS**************************************************

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let storeArray = [];



//WINDOW INTO DOM TEST
let storeSection = document.getElementById('stores');

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




Store.prototype.render = function(){
  this.cookieHr();

  let row = document.createElement('tr');
  storeSection.appendChild(row);

  let cell = document.createElement('td');
  cell.textContent = this.name;
  row.appendChild(cell);
  for(let i = 0; i < hours.length; i++ ){
    let cell = document.createElement('td');
    cell.textContent = this.cookieSales[i];
    row.appendChild(cell);
  }

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

let tokyo = new Store('Tokyo',3,24,1.2,[],0);
let seattle = new Store('Seattle',23,65,6.3,[],0);
let dubai = new Store('Dubai',11,38,3.7,[],0);
let paris = new Store('Paris',20,38.,2.3,[],0);
let lima = new Store('Lima',2,16,4.6,[],0);


storeArray.push(tokyo, seattle, dubai, paris, lima );

//storeArray = [{tokyo}, {seattle}];
// document.getElementById('stores').addEventListener('submit', handleSubmit(''));

// function handleSubmit(){

//   this.event.preventDefault;
//   // let useCapture=false;

//   console.dir(event.target);
//   let name = event.target.userName.value;
//   console.log(name);

//   let min = +event.target.minCust.value;
//   console.log(min);

//   let max = event.target.min.value;
//   console.log;(max);

//   let average = +event.target.average.value;
//   console.log(average);

//   let newStore = new Store(name, min, max, average );
//   storeArray.push(newStore);
//   console.log(newStore);

//   document.getElementById('stores').deleteRow(-1);

//   newStore.getCust();
//   newStore.cookieHr();
//   newStore.render();
// }



function renderAll(){
  for(let i = 0;i<storeArray.length; i++){
    storeArray[i].render();
  }
}

renderAll();
footer();
function footer() {
  let table = document.getElementById('stores');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'totals';
  tr.appendChild(td);
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let totalHours = 0;
    for (let j = 0; j < storeArray.length; j++) {
      totalHours = totalHours + storeArray[j].hours[i];
      grandTotal = grandTotal + storeArray[i].cookies[j];
    }
    let td = document.createElement('td');
    td.textContent = totalHours;
    tr.appendChild(td);

  }
  let grandTotalcell = document.createElement('td');
  grandTotalcell.textContent = grandTotal;
  tr.appendChild(grandTotalcell);
  table.appendChild(tr);
}



// trying to stop the table from refreshing, while still being able to add a new entry to be built//