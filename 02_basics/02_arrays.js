const marvel_heros = ["Ironman", "THOR" , "Spiderman"]
const dc_heros = ["Batman" , "Flash" , "Superman"]

// const all_heros = [];
// all_heros.push(dc_heros)
// all_heros.push(marvel_heros)
// console.log(all_heros);

// const all_heros= marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);
