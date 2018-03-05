const randomStr = (str) => [...str].sort(() => Math.random() - 0.5).join('')
console.log(randomStr('Hello World!'))