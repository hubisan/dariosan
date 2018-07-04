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

(function () {
    'use strict';
    // quickSort :: (Ord a) => [a] -> [a]  
    function quickSort(xs) {
        if (xs.length) {
            var h = xs[0],
		x = nil,
                t = xs.slice(1),
                lessMore = partition(function (x) {
                    return x <= h;
                }, t),
                less = lessMore[0],
                more = lessMore[1];
            return [].concat.apply(
                [], [quickSort(less), h, quickSort(more)]
            );
        } else return [];
    }
    // partition :: Predicate -> List -> (Matches, nonMatches)
    // partition :: (a -> Bool) -> [a] -> ([a], [a])
    function partition(p, xs) {
        return xs.reduce(function (a, x) {
            return (
                a[p(x) ? 0 : 1].push(x),
                a
            );
        }, [[], []]);
    }
    return quickSort([11.8, 14.1, 21.3, 8.5, 16.7, 5.7])
})();
