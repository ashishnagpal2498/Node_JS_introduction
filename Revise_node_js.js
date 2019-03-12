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

//Streams and Buffer - When there is connection between faster and slower medium -
//One of the medium has to wait for the data
//Buffer - stream of hex charaters

//Crash the program if error exist - throw err -
//Console.error - gives the console as error - print in red -

//***********************************HTTP API ****************************************
//HTTP - client side as well as server side
//client ka call back - response of the data send to the server
//Server - call - req, res - what should be the response for the coming request

//Client - called - once -
//server - calls every time someone hits the path

//PATH - utility to join path according to the environment -
const path = require('path');
console.log(path.join('/a','/b'))

//**********************EVENTS NODEJS************************
//Reactive programming -
//eventemitetr emit - To fire an event
//event.on - to create an event
//Data sync in async process

const EventEmitter = require('events')

const event = new EventEmitter(); //Constructor call;

// event.on('written',function (filename) {
//     console.log(`The file ${filename} has been written`)
// })
//
// fs.writeFile(path.join(__dirname,'file11.txt',
//     "The file is in the webstorm",
//     ()=>{
//     //Callback function
//         //fire the event
//         event.emit('written',1);
//     }))
// event.emit('written',0);

event.on('seqwrite',function (filenum) {
    if(filenum> 4) return;
    console.log(`The file number - ${filenum} has been written`)
    let newfilenum = filenum + 1;
    fs.writeFile(path.join(__dirname,"fileabc"+`${filenum}`+".txt"),
            `The file to be written using event emitter - is file${filenum}`,
        function () {
            event.emit('seqwrite',newfilenum);
        })
})
event.emit('seqwrite',0);

//*****************************Next tick *************************
//Aync- Function - Nexttick -
process.nextTick(function () {
    console.log('next tick');
})

//*********************Callbacks************************************
//Callback Functions -

function one(a,oneb) {
    console.log(a);
//    oneb is a callback function
    oneb(a+1,(c,threecb)=>{ //twocb function has a callback function
        console.log(c);
        threecb(c+1); //Iski defination ???
    });
}
one(1,(b,twocb)=>{ //defination of oneb
    console.log(b);
    twocb(b+1,(d)=>{
        console.log(d);
    }); //this is callback function of oneb - where should its defination go ??
})

//Callback - hellzz , encryption
//
function downloadFile(url,downloaded) {
    // console.log(url);
    setTimeout(()=>{
        downloaded(null,"Data Downloaded")
    },2000)
}
function encryptFile(data,encrpted) {
    setTimeout(()=>{
        encrpted(null,`{{{${data}}}}`)
    },1000)
}
function saveFile(data,saved) {
    setTimeout(()=>{
        saved(null,true);
    },1000)
}

downloadFile("https://cb.lk/abc",(err,data)=>{
    if(!err)
    {
        encryptFile(data,(err2,encrpted_data)=>{
            if(!err2)
            {
                saveFile(encrpted_data,(err3,saved_data)=>{
                    if(!err3 && saved_data)
                    {
                        console.log('data dl ed , encr ed and saved ');
                    }
                })
            }
        })
    }
})