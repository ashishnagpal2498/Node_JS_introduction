//Revising node JS
//*******************************INTRODUCTION**************************
console.log('hello');
console.log(global);
//Exist in Browser
// console.log(document)
// console.log(window)

//Process.argv

let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
console.log(a+b);
// Repl kind of stuff as node

//***************primitive and object type*******************
let m = "10";
console.log(typeof m);
let p = new Number(m);
console.log(typeof p);
console.log(typeof parseInt(m));
let num = Number(m);
console.log(typeof num);
console.log(p==num);
console.log(p===num)

//Primitive - Class
function myNumb(stringval) {
    return parseInt(stringval)
}
console.log(myNumb("10"))
//Its an empty object
console.log(new myNumb("10"))
 function MyNumber(str) {
     return {
         obj: parseInt(str)
     }
 }
 console.log(MyNumber("10"))
console.log(new MyNumber("10"))

//*******************************Node *****************************
//NodeJs - Documentation
//File system API
const fs = require('fs')

fs.writeFile(__dirname+'/file.txt',
    "This is an awesome file",
    function () {
    //    Callback function
        console.info('The file Yo has been written')
    }
    )
console.log('hello')
//We can write HTML files also - using this fs file system

    fs.readFile(__dirname +'/file.txt',function (err,data) {
        console.log(data.toString())
    })
// },2000)
