//It was a project of V8 - chromium - which was brought to the PC - to interpret Javascript
//Difference Btween Nodejs and Browser
console.log('hello');
//console.log(window)
//console.log(global)
//console.log(document)
// console.log(process); // Works for NODE JS
// //NR window protocol , sliding window protocol
// //difference between sockets and http
// //SSH connection with server - Create a connection , establish that and then send data
// console.log(process.argv)
// let a = parseInt(process.argv[2]);
// let b = parseInt(process.argv[3]);
// console.log(a+b);

// let p = new Number(arg);

//Number as integer and object
//Number . tosource
//ParseInt number new number + operator
//Constructor

//Function and primitive value
function myNum(string_str) {
    return parseInt(string_str);
}
let mynumobj = myNum("10");
let mynumObj2 = new myNum("10")
console.log(mynumobj)
console.log(mynumObj2)
//But if we use object as return

function MyNumber(stringstr) {
    return {a:parseInt(stringstr)}
}

let abcd = MyNumber("10")
let ablm = new MyNumber("10")
let n1 = new Number('10')
console.log(abcd)
console.log(ablm)
abcd++; ablm++; n1++;
console.log(abcd)
console.log(n1)

//Console provided by the nODE JS
//console.error('This is an err')
// process.stdout('abc')