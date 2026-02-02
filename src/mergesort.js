export function mergesort(array) {
  if (array.length === 1 || array.length === 0) {
    return array;
  }

  let firsthalf = mergesort(array.slice(0, Math.floor(array.length / 2)));
  let secondhalf = mergesort(
    array.slice(Math.floor(array.length / 2)),
    array.length,
  );

  let i = 0;
  let j = 0;
  let k = 0;
  let result = [];

  while (i < firsthalf.length || j < secondhalf.length) {
    if (i < firsthalf.length && j < secondhalf.length) {
      if (firsthalf[i] <= secondhalf[j]) {
        result[k] = firsthalf[i];
        i++;
      } else {
        result[k] = secondhalf[j];
        j++;
      }
    }else if(i >= firsthalf.length && j < secondhalf.length){
        result[k] = secondhalf[j];
        j++;
    }else{
        result[k] = firsthalf[i];
        i++;
    }
    k++;
  }

  return result;
}
