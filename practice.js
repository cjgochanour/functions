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

const add = (num2, num3, num1) => {
    return num3 + num2 + num1
}

console.log(add(17, 4, 11))