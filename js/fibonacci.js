function nthFibo(n) {
  if (n < 1) {
    return 'Число должно быть больше 1';
  }

  let fibo = [0, 1];

  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n - 1];
}

// node js/fibonacci.js 

console.log( nthFibo(0) );
console.log( nthFibo(1) );
console.log( nthFibo(2) );
console.log( nthFibo(3) );
console.log( nthFibo(4) );
console.log( nthFibo(5) );
console.log( nthFibo(6) );
console.log( nthFibo(7) );
console.log( nthFibo(10) );
console.log( nthFibo(11) );
console.log( nthFibo(13) );

