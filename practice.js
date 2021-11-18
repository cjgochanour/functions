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