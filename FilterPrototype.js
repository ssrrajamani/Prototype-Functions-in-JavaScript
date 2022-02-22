Array.prototype.filterPrototype=function(callback){
  let result=[];
  for(let i=0;i<this.length;i++)
  {
    if(callback(this[i]))
        result.push(this[i]);
  }
  return result;
}

function removeLessThan18(value){
  return value>=18;
}

const array=[10,20,30,40];
console.log(array.filterPrototype(removeLessThan18));
