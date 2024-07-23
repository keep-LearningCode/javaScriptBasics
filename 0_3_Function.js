function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      return i;  // a prime
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }
  console.log(showPrimes(10));
  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  console.log(min(2,3));
  function hello(num1, num2){
    return num1+num2;
  }
  console.log(hello(2,3));