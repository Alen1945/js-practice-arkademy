const fibo=require('./src/fibonacci.js')
const arr=require('./src/arr')
const {vUsername,vPassword}=require('./src/validate')

console.log(fibo(5))
console.log(arr({nama:'alen',nomor_ponsel:"00000",email:'alee@gmail.com'}))

let user1="alen27$7" //false
let user2 ="alen1945" //true

console.log("username = "+user1+" maka "+vUsername(user1))
console.log("username = "+user2+" maka "+vUsername(user2))


let pass1="alen" //false
let pass2 ="alen1945" //true

console.log("password = "+pass1+" maka "+vPassword(pass1))
console.log("password = "+pass2+" maka "+vPassword(pass2))