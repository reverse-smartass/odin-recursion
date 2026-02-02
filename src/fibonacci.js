let fibonaccis = [];

fibonaccis[0] = 0;
fibonaccis[1] = 1;
fibonaccis[2] = 1;

export function fibonacci(num) {
  if (typeof num !== "number" || num % 1 !== 0 || num < 0) {
    return undefined;
  }

  if (fibonaccis[num] === undefined) {
    fibonaccis[num] = fibonacci(num - 1) + fibonacci(num - 2);
  }
  return fibonaccis[num];
}

export function fibonacciList(num){

  for(let i = 0; i < num; i++){
    if(fibonaccis[num] === undefined){
      fibonacci(num);
    }
  }

  console.log(fibonaccis.slice(0, num).map(BigInt));

  return fibonaccis.slice(0, num);
}
