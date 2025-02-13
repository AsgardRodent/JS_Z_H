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

console.log(`If my country's population would be divided into 2 then the each half would have ${myContinent_population} million,
    which is more than ${fin_population} million people of a finland and avg of another country with ${avg_pop_country} million,
    where people from my city speak ${language}`)

// Type Conversion & Type Coercion 

// Type Conversion is manually done to match the user's needs where as Coercion is the automatic handling of types done by JS on its own 

const year = '2000'

console.log(typeof (Number(year)))
console.log(typeof (year))

//how is year still a string because the number(year) returns a number value but it is not assigned to anything.
//lets save the result from the Number(year) 

const num = Number(year)
console.log(num)
console.log(typeof (num))

// now the value is saved and kept in the memory but what if we want to concatinate the string with number ? we know we cant directly do that in python ? 

console.log("hey its the " + num + " " + year)

// num is a number and year is string then how is it working ? 
// TYPE COERSION -automatically converts the values for use.
// so, what should be the output of these code lines ? 

console.log('9' - '5'); // -> ? 4 
console.log('19' - '13' + '17'); // -> ? 617
console.log('19' - '13' + 17); // -> ? 23
console.log('123' < 57); // -> ? false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ? 1143

//truthy & falsy values

//lets see if anything changes the boolean if anything anything is not defined,

let money = 0 

if (money) {
    console.log("Well , Well , Well, what we have here 🙏")
}
else {
    console.log("Boy, Get you ass to work")
}

// now since money is 0 the else block will get executed lets change the moeny to be more... 

money = 100

if (money) {
    console.log("Well , Well , Well, what we have here 🙏")
}
else {
    console.log("Boy, Get you ass to work")
}

//dint do anything today , mid terms ! T_T 

let kryptonite 

kryptonite = 'batman'

console.log(`Superman's krytonite isn't your kryptonite but it is ${kryptonite}`)

// nvm i want to finish the first section 

let sarah = true

// sarah has some requirements 
// country should speak english , less than 50 mill population and not an island lets see if we can implement that 
if (sarah) {
    
    if (language == "English" && myContinent_population < 50 && !isIsland ) {
        console.log(`You should live in ${myCountry} :D`)
    }
    else{
        console.log(`${myCountry} is not for you !!`)
    }
}

// lets learn switch case 
// lets take a set  of lan guages spoken in India 
// Hindi , English , Tamil , Telugu, Gujarati, Marathi 

let language_selected = 'Marathi'

switch (language_selected) {
    case 'Marathi':
        console.log(`My Native Language`)
        break;
    case 'Hindi':
        console.log(`Language spoken in the mid to north of the country`)
        break;
    case 'Telugu':
        console.log(`Language spoken in AP`)
        break;       
    case 'Tamil':
        console.log(`Language from Tamil Nadu`)
        break;
    case 'Gujurati':
        console.log(`Gujju boyz & gurlz`)
        break;
    default:
        console.log(`${language_selected} is not promuinant in India`)
        break;
    }

// we know about ternery operator lets try implementing it on the population variable we created

console.log(myContinent_population)

myContinent_population >= 1000 ? console.log(`${myCountry} is a highly populated country !!!`)
: console.log(`${myCountry} is a small country`)

const bill = 275;

/* Write your code below. Good luck! 🙂 */
let tip

const tip = bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
