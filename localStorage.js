//LocalStorage can be stored only string, number and simple other data types-no object or array

//Set, Get, Remove, Delete
// SET
localStorage.setItem("name","Balaji")
//GET
console.log(localStorage.getItem("name"));
//Remove
console.log(localStorage.removeItem("name"));
//Delete





// JSON.stringify - will convert the array to string 
//JSON
const numbers=[1,2,3,4,5,6,7,8,9]
console.log(numbers);
//output---(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Array to string(stringify)
const convertToString=JSON.stringify(numbers)
console.log(convertToString);
//output---[1,2,3,4,5,6,7,8,9]

//String to array(parse)
const StringToArray=JSON.parse(convertToString) // it will again change it to array == convertToString
console.log(StringToArray);

// console.log(localStorage.getItem("name","balaji"));
