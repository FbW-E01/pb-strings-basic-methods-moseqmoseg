const var1 = "I can walk in the park all day!"
const var2 = "Hello World"
const var3 = "Hello Earthling"
const var4 = "JavaScript"
const var5 = "nice shoes"
const var6 = "the quick brown fox"
let firstName = "Mario"
let city = "Berlin"
let job = "musician"



//1
console.log(var1.slice(18, 22));
//2
console.log(var2.toUpperCase());
//3
console.log(var3.toLowerCase());
//4
console.log(var4.slice(3, 6));
//5
console.log(var5.includes("I"), var5.includes("n"));
//6
console.log(var2[0].toUpperCase() + var2 + var2[0].toUpperCase());
//7 
console.log(var2.slice(-3) + var2 + var2.slice(-3));
//8
console.log(var4[9].toUpperCase() + var4.slice(1, 9) + var4[0]);
//9
console.log(`My name is ${firstName} and I am a ${job} who currently lives in ${city}`);
//10
console.log(var6[0].toUpperCase() + var6.slice(1));