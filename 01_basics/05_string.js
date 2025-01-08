const name = "Rocket"
const repoCount = 12

// console.log(name + repoCount + "Value"); //bad way

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)  //interpolation

const gameName = new String('Rocket-21-boom');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(3));

// console.log(gameName.indexOf("t"));

// console.log(gameName.slice(4));
const newString = gameName.substring(0,5)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "      satyanshu     "
// console.log(newString);
// console.log(newStringOne.trim());

const url = "https://rocket.com/rocket%3421boom"

const newURl = url.replace("%", "-")

// console.log(newURl);

console.log(gameName.split("-")[0].length);
