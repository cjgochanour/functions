// Best in Show
const favoriteDog = (breed) => {
    if (breed === "meow"){
        return `I like cats`
    }else{
        return `My favorite dog breed is ${breed}`
    }
}

const myFavorite = favoriteDog("meow")

console.log("When it comes to pets, " + myFavorite)
console.log("When it comes to pets, " + favoriteDog("schnauzer"))

// Addition
const add = (num2, num3, num1) => {
    return num3 + num2 + num1
}

console.log(add(17, 4, 11))

// Self-Driving Cars
const go = (direction, mph) => {
    let message = `The car is moving ${direction} at ${mph} mph.`
    if (mph > 75) {
        message += ` SLOW DOWN!`
    }
    return message
}

// Evens or Odds
let wholeLottaNumbers = [26, 57, 43, 99, 73, 85, 47, 80, 53, 41, 62, 52, 69, 38, 3]

const evenOrOdd = (num) => {
    if (num % 2 === 0){
        return 'Even'
    } else{
        return 'Odd'
    }
}

console.log(evenOrOdd(0))

for (const num of wholeLottaNumbers){
    evenOrOdd(num)
}