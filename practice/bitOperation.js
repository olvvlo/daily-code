const a = 3,
      b= 5

const c = a&b // 1

console.log('a&b = ', c)

/*
0000 0011
0000 0101
0000 0001  按位与
*/

const d = a|b // 7

/*
0000 0011
0000 0101
0000 0111  按位或
*/

console.log('a|b = ', d)

const e = a^b // 6

/*
0000 1100
0000 0101
0000 0110  按位异或
*/

console.log('a^b = ', e)

const f = a << 3 //24

/*
0000 0011
0000 0011000
0001 1000   左移补0
*/

console.log(f)