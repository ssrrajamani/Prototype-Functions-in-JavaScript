/*
The main difference between map and forEach is that the map method returns a new array
by applying the callback function on each element of an array, while the forEach method
doesn't return anything.
*/

Array.prototype.ForEachPrototype=function(callback){
  for(let i=0;i<this.length;i++)
    this[i]=callback(this[i]);
}

function multiplyByTwo(value){
  return value*2;
}

const array=[10,20,30,40];
array.ForEachPrototype(multiplyByTwo);
console.log(array);
