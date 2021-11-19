// Best in Show
const favoriteDog = (breed) => {
    if (breed === "meow") {
        return `I like cats`;
    } else {
        return `My favorite dog breed is ${breed}`;
    }
};

const myFavorite = favoriteDog("meow");

console.log("When it comes to pets, " + myFavorite);
console.log("When it comes to pets, " + favoriteDog("schnauzer"));

// Addition
const add = (num2, num3, num1) => {
    return num3 + num2 + num1;
};

console.log(add(17, 4, 11));

// Self-Driving Cars
const go = (direction, mph) => {
    let message = `The car is moving ${direction} at ${mph} mph.`;
    if (mph > 75) {
        message += ` SLOW DOWN!`;
    }
    return message;
};

// Evens or Odds
let wholeLottaNumbers = [
    26, 57, 43, 99, 73, 85, 47, 80, 53, 41, 62, 52, 69, 38, 3,
];

const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

console.log(evenOrOdd(0));

for (const num of wholeLottaNumbers) {
    evenOrOdd(num);
}

// Double Functions
const words = [
    "The",
    "killing",
    "complex",
    "houses",
    "married",
    "kittens",
    "and",
    "single",
    "soldiers",
    "and",
    "their",
    "kleptomaniacal",
    "families",
];

const filter = () => {
    let unFilteredWords = [];
    for (const word of words) {
        if (word.startsWith("k")) {
        } else {
            unFilteredWords.push(word);
        }
    }
    return unFilteredWords;
};

const stringBuilder = (filterFunction) => {
    let lotsaWords = filterFunction.join(" ");
    return lotsaWords;
};

console.log(stringBuilder(filter()));

// You Can Tune a Piano, But You Can't...

const svensLuck = (fraction) => {
    const hisNum = Math.random() * fraction;
    let svenString;
    if (hisNum < 1) {
        svenString = "Sven hooked a tuna!  :)";
    } else {
        svenString = "Sven came up empty-handed.  :(";
    }
    return svenString;
};

// Fast Food (Multiple Parameters)

const mealMaker = (san, sid, dri, des) => {
    let meal = {};
    meal.sandwich = san;
    meal.side = sid;
    meal.drink = dri;
    meal.dessert = des;
    return meal;
};

const takeOutBag = mealMaker(
    "Ultimate Slammer",
    "Fudge sundae",
    "Mr. Pepper",
    "Potato wedges"
);

// Same Chores, Different Days
const donny = {
    firstName: "Donald",
    lastName: "McLelland",
};
const yolo = {
    firstName: "Yolanda",
    lastName: "Johnson",
};

const groceries = (person) =>
    `${person.firstName} ${person.lastName} went to the grocery store`;
const oil = (person) =>
    `${person.firstName} ${person.lastName} got the enginee oil changed`;
const trash = (person) =>
    `${person.firstName} ${person.lastName} took out the trash`;
const pbs = (person) =>
    `${person.firstName} ${person.lastName} donated to their local PBS broadcasting station`;
const dishes = (person) =>
    `${person.firstName} ${person.lastName} washed the dishes`;
const vaccuum = (person) =>
    `${person.firstName} ${person.lastName} vaccumed the carpet`;
// the above functions will give the proper output, but I am not sure how to make that compatible with dayPlanner(), or if that's even what's being asked
// this is a working substitute function
const lawn = () => `mowed the lawn`;
const dryCleaning = () => `picked up the dry cleaning`;
const batteries = () => `replaced the batteries in the smoke detectors`;

const dayPlanner = (firstChore, secondChore, thirdChore, person, day) =>
    `On ${day}, ${person.firstName} ${person.lastName} ${firstChore}, ${person.firstName} ${person.lastName} ${secondChore}, and ${person.firstName} ${person.lastName} ${thirdChore}.`;

console.log(dayPlanner(lawn(), dryCleaning(), batteries(), yolo, "Monady"));
