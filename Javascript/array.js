// const cities = ["tokyo" , "paris" , "los vegas" , "dallas" , "philadelfia"];
// //cities.splice(2);

// console.log(cities);

const marvel_heros =[ "thor" , "spiderman","ironman"];
const dc_heros = ["superman" , "flash" , "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

all_heros = [...marvel_heros , ...dc_heros];
console.log(all_heros);

const another_Array = [1,2,3 ,[4,5,6,7,[8,9,10]]];
const real_another_array = another_Array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("ankita"));
console.log(Array.from({
    name : "ankita"
}));

let score1 = ["A" , "B" , "C"];
let score2 = 200;
let score3 = 300;

console.log(Array.of(...score1 , score2 , score3));