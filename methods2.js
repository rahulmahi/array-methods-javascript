//join()

let fruits = ["apple","banana","mango"];
//let fruits = [1,2,3,4]
let d = fruits.join(" ");

console.log(d);

//keys()

 let arr = ["blue","red","orange","red"];

 let z = arr.keys()
  for(let key of z){
  console.log(key);
  }

 //lastIndex()

 let arr = ["a","b","c","b"];

 let z = arr.lastIndexOf("b");

 console.log(z);

//pop()

 let items = ["dog","my","you"];

 console.log(items.pop());

//push

let items = ["dog","my","you"];

items.push("cat");

console.log(items);

//reduce()

let arr = ["javascript ","is ","fun ","language"];

//let arr = [1,2,3,4]
//let z = arr.reduce();

function names(accumlatoe,value)
{
    return accumlatoe + value;

}
let z = arr.reduce(names);
console.log(z)