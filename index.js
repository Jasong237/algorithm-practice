/* for (let i = 0; i < 7; i++) {
  console.log(i);
} // for a certain amount of times

while (HP > 0) {
  fightBoss();
  anotherThing();
} */

/* function factorial(n) {
  if (n < 1) {
    return;
  } // guard clause
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
}

console.log(factorial(3)); // is not an algorithm bc no it function

/* function newFactorial(n) {
  if (n > 0) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
      ans *= i;
    }
    return ans;
  } else {
    return;
  }
} */

/* function test(n) {} */

/* function occupied(n) {
  let free = 5;
  for (let n = 10; 0 <= n <= 100; n++) {
    free - n = c;
  }
  console.log(c);
}

console.log(occupied(10));
 */

/* function checkSpaces(n, yesterday, today) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (yesterday[i] === "C" && today[i] === "C") {
      count++;
    }
  }
  return count;
} */

// console.log(checkSpaces(5, "CCC.C", ".CC.."));

/* function binary(a) {
  let ans = 1;
  for (let i = 0; i < a; i++) {
    if (a[i] < 16) {
      ans++;
    }
  }
  return ans;
}

console.log(binary(16)); */

function decimal(n) {
  let ans = 1;
  for (let i = 1; i < n; i++) {
    if (decimal[n] === 1) {
      ans++;
    }
    return ans;
  }
}

console.log(decimal(11));
