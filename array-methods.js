// ----- Solar System

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

function planetBuilder(planet) {
  return `<section id="planets">${planet}</section>`
}

function appendPlanets(planets) {
  let article = document.createElement("article");
  article.id = "solar-system";
  document.body.appendChild(article);

  planets.forEach(planet => {
    article.innerHTML += (planetBuilder(planet));
  })
}

appendPlanets(planets);

const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let capitalPlanets = planets.map(planet => {
    return planet.slice(0, 1).toUpperCase() + planet.slice(1);
})

console.log(capitalPlanets);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let iLikeTheLetterE = planets.filter(planet => { //using map returns some undefined indeces
    if (planet.indexOf("e") > -1) {
        return planet
    }
});

console.log("filter array by letter \"e\": " + iLikeTheLetterE);

let allAboutE = planets.filter(planet => planet.includes("e"));

console.log("here's another way to filter: " + allAboutE)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

console.log(words.reduce((a,b) => a + " " + b))

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// ----- Spam, spam, spam!

    // extract just the customers' contact email addresses and
    // store them in a new array. 

let emails = [];

//loop outer array to view 10 objects
customers.forEach(jsonObj => {
    //access email addresses in each object
    jsonObj.contacts.email.forEach(emailAddress => {
        // push each email to new array
        emails.push(emailAddress);
    });
})

console.log(emails);

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// ----- Challenge: chaining methods

    // Using one single line of JavaScript code, complete the following tasks on the array of integers below.

    // Sort the numbers in descending order (10, 9, 8, 7, etc).
    // Remove any integers greater than 19.
    // Multiply each remaining number by 1.5 and then subtract 1.
    // Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort((a, b) => b - a).filter(num => num < 19).map(num => num * 1.5 - 1).reduce((a,b) => a + b));

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

// ----- Advanced challenge: car dealership

    // ---------- #1: Total profit for 2017
let sales = [];

cars.forEach(sale => {
    sales.push(sale.gross_profit)
});

console.log(`#1: Total profit for 2017 = $${sales.reduce((a,b) => a+b)}`)

    // ---------- #2: In which month did they sell the most cars?
let saleDates = [];
let months = [];
let sortedMonths = [];

//store sale dates in array
cars.forEach(sale => {
    saleDates.push(sale.purchase_date);
});

// store sale date months in array
saleDates.forEach(carSaleDate => {
    months.push(carSaleDate.slice(5,7))
})

//sort months by converting strings to numbers first
//not necessary, but good to be able to count months in console before the function below
months.sort((a,b) => Number(b) - Number(a))

function countEachMonth(array) {
	// make a copy of the input array
    let copy = array.slice(0);
    // first loop goes over every element
	for (let i = 0; i < array.length; i++) {
		let counter = 0;	
		// loop over every element in the copy and see if it's the same as each index "i"
		for (let j = 0; j < copy.length; j++) {
			if (array[i] == copy[j]) {
				// increase amount of times duplicate is found
				counter++;
				// sets item to undefined
				delete copy[j];
			}
        }
    // nested loop ends, and any copies of array[i] are recorded in an object and then pushed to an array
		if (counter > 0) {
			let a = new Object();
			a.month = array[i];
			a.count = counter;
			sortedMonths.push(a);
		}
    }
}

countEachMonth(months);

console.log("#2: June had the most sales (10 total). See this array: ", sortedMonths)

    // ---------- #3: Which salesperson sold the most cars?
let salesPeople = [];
let salesPeopleResults = [];

//add names to an array
cars.forEach(jsonObj => {
    let firstname = jsonObj.sales_agent.first_name;
    let lastname = jsonObj.sales_agent.last_name;
    salesPeople.push(`${firstname} ${lastname}`)
})

//count how many times each person sold a vehicle and put result into array
function countSalesPeopleResults(array) {
	// make a copy of the input array
    let copy = array.slice(0);
    // first loop goes over every element
	for (let i = 0; i < array.length; i++) {
		let counter = 0;	
		// loop over every element in the copy and see if it's the same as each index "i"
		for (let j = 0; j < copy.length; j++) {
			if (array[i] == copy[j]) {
				// increase amount of times duplicate is found
				counter++;
				// sets item to undefined
				delete copy[j];
			}
        }
    // nested loop ends, and any copies of array[i] are recorded in an object and then pushed to an array
		if (counter > 0) {
			let a = new Object();
			a.salesperson = array[i];
			a.count = counter;
			salesPeopleResults.push(a);
		}
    }
}

//this function call populates an array with objects of salesperson and total sales
countSalesPeopleResults(salesPeople);

//set initial best sales person to first person in array
let topSalesPerson = salesPeopleResults[0].salesperson;
//set initial max to first person's total sales in array
let maxSales = salesPeopleResults[0].count;

//for every person (each individual salesperson) in the array of objects
//compare with the current topSalesPerson and maxSales
salesPeopleResults.forEach(obj => {
    if (obj.count > maxSales) {
        topSalesPerson = obj.salesperson;
        maxSales = obj.count;
    } else if (obj.count === maxSales) {
        topSalesPerson += ", " + obj.salesperson;
    }
});

console.log(`#3: The top salesperson is ${topSalesPerson} with ${maxSales} sales`)


    // ---------- #4: Which salesperson made the most profit?
let salesPeopleProfit = [];

//Steps:
// - Loop over each object (31 total, which can be seen with 
//   console.log(salesPeopleResults)) in the organized array of
//   salespeople created in problem #3 and compare the name of each
//   person with each dealership object. 
// - Loop over each object in cars.js (dealership records) and look
//   at each object (we want sales_agent.first_name and last_name
//   and also the gross_profit)
//      - If the full name of the person in the dealership object matches 
//        the full name in the organized 
//        array, then the profit variable for that person is incremented
// - The result is expected to have 31 objects (total salespeople) 
//   in an array listed with the person's respective profit


salesPeopleResults.forEach(personObj => {
    let profit = 0;
    //salesperson name in organized array
    let name = personObj.salesperson; 
    //if fullname in each cars array object = the salesperson 
    //name string in the salesPeopleResults array (see problem #3),
    //then increment the profit for that person

    cars.forEach(dealershipObj => {
        let firstname = `${dealershipObj.sales_agent.first_name}`;
        let lastname = `${dealershipObj.sales_agent.last_name}`;
        let fullname = firstname + " " + lastname; //dealership record of salesperson who sold vehicle
        
        if (fullname === name) {
            profit += dealershipObj.gross_profit;
        }
    });

    //push new object with salesperson name and their profit to array
    let b = new Object();
    b.salesperson = name;
    b.profit = `${profit.toFixed(2)}`;
    salesPeopleProfit.push(b);
})

//Here's the array with each individual's profit results:
console.log(salesPeopleProfit);
//Now let's find the top earning salesperson:

//set initial best sales person to first person in array
let topSalesPersonProfit = salesPeopleProfit[0].salesperson;
//set initial max to first person's total sales in array
let maxProfit = Number(salesPeopleProfit[0].profit);

//for every person (each individual salesperson) in the array of objects
//compare with the current top earner and their max profit value
salesPeopleProfit.forEach(obj => {
    let currentObjProfit = Number(obj.profit);

    if (currentObjProfit > maxProfit) {
        topSalesPersonProfit = obj.salesperson;
        maxProfit = obj.profit;
    } else if (currentObjProfit === maxSales) {
        topSalesPersonProfit += ", " + obj.salesperson;
    }

});    

console.log(`#4: The salesperson with the highest earnings is ${topSalesPersonProfit} at $${maxProfit}`)


    // ---------- #5: Which model was the most popular?
    // ---------- #6: Which bank provided the most loans to our customers?