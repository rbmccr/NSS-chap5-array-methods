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

console.log(iLikeTheLetterE);

let allAboutE = planets

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

