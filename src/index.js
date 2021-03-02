
exports.min = function min (array) {
  if(!array || array.length == 0){
    return 0;
  }
  let minimal = array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i] < minimal)
      minimal = array[i]
  }
  return minimal;
}

exports.max = function max (array) {
  if(!array || array.length == 0){
    return 0;
  }
  let maximum = array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i] > maximum)
      maximum = array[i]
  }
  return maximum;
}

exports.avg = function avg (array) {
  if(!array || array.length == 0){
    return 0;
  }
  let result = 0;
  for(let i = 0; i < array.length; i++){
    result += array[i]
  }
  return result/array.length;
}
console.log(exports.avg([12,4,5,8]))
