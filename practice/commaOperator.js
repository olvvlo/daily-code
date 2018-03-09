var sum = 0
for(var i = 0, j = 0; i < 5, j < 10; i++, j++){
  sum += i + j
}
console.log(sum)

a = b = 3, c = 4; // Returns 4 in console
console.log(a); // 3 (left-most)

x = (y = 5, z = 6); // Returns 6 in console
console.log(x); // 6 (right-most)