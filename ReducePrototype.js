Array.prototype.reducePrototype=function(callback){
  let sum=0;
  for(let i=0;i<this.length;i++)
    sum=callback(sum,this[i]);
  return sum;
}

function sumTheSquaredValues(sum,value){
  return sum+(value**2);
}

const array=[1,2,3,4];
console.log(array.reducePrototype(sumTheSquaredValues));
