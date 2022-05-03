let hacker1 = "Kati";
const newHacker = hacker1.toUpperCase("").split("").join(" ");
console.log(newHacker);
console.log("The driver's name is " + hacker1);
let hacker2= "Kazi";

const newHacker2 = hacker2.split("").reverse("").join(" ");
console.log(newHacker2);
console.log("The navigator's name is " + hacker2);

// //Iteration 2 conditionals

console.log(hacker1.length);

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}
     characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

//Iteration 3 to sort the names alphabetically
let items = [hacker1, hacker2];
const namesInOrder = items.sort((a, b) => a.localeCompare(b));
console.log(namesInOrder);


//to print the desired messages depending on the order of the names
if(hacker1 === hacker2) {
  console.log("What?! You both have the same name?")
} else if (namesInOrder[0] === hacker1) {
  console.log("The driver's name goes first.")
} else {
  console.log("Yo, the navigator goes first definitely.")
}




