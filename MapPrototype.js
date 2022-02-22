Array.prototype.mapPrototype=function(callback){
  let result=[];
  for(let i=0;i<this.length;i++)
    result[i]=callback(this[i]);
  return result;
}

function multiplyByTwo(value){
  return value*2;
}

const array=[1,2,3,4];
console.log(array.mapPrototype(multiplyByTwo));
