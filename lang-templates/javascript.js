// Sieve of Eratosthenes

function eratosthenes(limit) {
  var primes = [];
  if (limit >= 2) {
    var sqrtlmt = Math.sqrt(limit) - 2;
    var nums = new Array(); // start with an empty Array.
    for (var i = 2; i <= limit; i++)
      nums.push(i);
    for (var i = 0; i <= sqrtlmt; i++) {
      var p = nums[i]
      if (p)
        for (var j = p * p - 2; j < nums.length; j += p)
          nums[j] = 0;
    }
    for (var i = 0; i < nums.length; i++) {
      var p = nums[i];
      if (p)
        primes.push(p);
    }
  }
  return primes;
}

var primes = Eratosthenes(100);

var x = 2;

console.log('An array of the prime numbers from 0 to 100: '+ primes);
