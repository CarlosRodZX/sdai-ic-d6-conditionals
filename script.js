// all code for this lab to be completed in this file
let currentTemp = 70

// Is the temperature freezing?
if (currentTemp >= 32) {
    console.log("It's nice and comfy.")
} else {
    console.log("It's too cold")
}

// Who is older?

// const customerAge1 = 25
// const customerAge2 = 45

// if (customerAge1 >= 45) {

//    console.log("You're too old")

// } else if (customerAge2 <= 25){

//    console.log("You're really young")

// } else (customerAge1 === customerAge2) {
//     console.log("How old are you really?")
// }

const person1Age = 52
const person2Age = 47

//if...else if...else

if (person1Age > person2Age) {  // person1 is older

    console.log("Show some respect") 

} else if (person1Age < person2Age) { // person1 is younger

    console.log("Man, you're old bro")

} else { //person1 and person2 are same 
    console.log("We're birthday friends!")
}