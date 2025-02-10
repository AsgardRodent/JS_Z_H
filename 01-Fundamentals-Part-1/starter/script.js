const myName = "Gaurav"
const myLastName = "Hungund"
let myCountry = "India"
let myContinent = "Asia"
let myContinent_population = 1429 // converted the string to number for maths and billion to million 
const isIsland = false
const language = "Marathi"

console.log(`Hello Nice to meet you , I am ${myName} ${myLastName}, I am from ${myCountry} , which is a part of the ${myContinent} continent and has a population of ${myContinent_population}`)

console.log(typeof isIsland)
console.log(typeof myContinent_population)
console.log(typeof myCountry)
console.log(typeof language)

// isIsland = true assignment to constant variable, because "const" is inmutable.

// lets sp[lit the country into 2 

myContinent_population /= 2
console.log(myContinent_population)

// now my people are divided , lets tackle the next query, 
// i have been asked to increment the poulation by 1

// way 1 : 
// myContinent_population += 1
// console.log(myContinent_population)

// way 2:
myContinent_population++ 
console.log(myContinent_population)

//lets go next ,
// finland has a population of  6 million (LOL), does my home country have more people than finland,

// console.log(myContinent_population > 6)

// should use variables honestly, 

let fin_population = 6 
console.log(myContinent_population > fin_population)

//check if population is less than the e33 million 

let avg_pop_country = 33 
console.log(myContinent_population < avg_pop_country)

// lets create a description for the variables we have made and used.
// lets use a a formatted string for this 

console.log(`If my country's population would be divided into 2 then the each half would have ${myContinent_population},
    which is more than ${fin_population} people of a finland and avg of another country with ${avg_pop_country}
    where people from my city speak ${language}`)

