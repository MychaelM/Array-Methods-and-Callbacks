import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
for (let i = 0; i < fifaData.length; i++) {
    const element = fifaData[i];
    if (element.Year === 2014 && element.Stage === "Final") {
        console.log(element['Home Team Name']);
        console.log(element["Away Team Name"]);
        console.log(element["Home Team Goals"]);
        console.log(element["Away Team Goals"]);
        console.log(element['Win conditions']);
    }
}


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(array) {

   const newArray = array.filter((item) => {
       return item.Stage === "Final";
   })
return newArray;
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback, array) {

    const newArray = callback(array);
    return newArray.map((item) => {
        return item.Year;
    })

};

console.log(getYears(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback, array) {

    const newArray = callback(array);
    const winners = newArray.map((item) => {
        if (item['Home Team Goals'] > item['Away Team Goals']) {
            return item['Home Team Name'];
        } else {
            return item['Away Team Name'];
        }
    })
    return winners;
};

console.log(getWinners(getFinals, fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(finalsCallback, array) {

    const finalsYears = getYears(finalsCallback, array);
    const winners = getWinners(finalsCallback, array);

    for (let i = 0; i < winners.length; i++) {
        
        console.log(`In ${finalsYears[i]}, ${winners[i]} won the world cup!`);
        
    }

};

console.log(getWinnersByYear(getFinals, fifaData));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(array) {

    const callbackHome = (accum, currentValue) => accum + currentValue["Home Team Goals"];
    const callbackAway = (accum, currentValue) => accum + currentValue["Away Team Goals"];

    const averageHome = (array.reduce(callbackHome, 0)/array.length).toFixed(2);
    const averageAway = (array.reduce(callbackAway, 0)/array.length).toFixed(2);
    return `Average Home Team Goals: ${averageHome}, Average Away Team Goals: ${averageAway}`;


};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
