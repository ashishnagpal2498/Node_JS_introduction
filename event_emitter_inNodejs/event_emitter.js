//Event Loop In Js
//There will be many asynchronus task in node js
//Node js itself runs multi-threaded but it take a single thread on whole
//Event Emitter system
//Basis on which Reactive Programing work
// Creating data synchronised using Eventemitter-
//A thread can change the data of all the threads

const fs = require('fs');
const path = require('path')
const EventEmitter = require('events');

const event = new EventEmitter();

// event.on('write',function (filename) {
//     console.log(`File ${filename} has been written`)
//
// })
// //This task is done asynchronously
// fs.writeFile(path.join(__dirname,'file.txt'),
//     'this is some data to the file 1',
//     function (err) {
//         if(err) console.error(err);
//         event.emit('write',1);
//     })
// fs.writeFile(path.join(__dirname,'file.txt'),
//     'this is some data to the file 1',
//     function (err) {
//         if(err) console.error(err);
//         event.emit('write',2);
//     })
// fs.writeFile(path.join(__dirname,'file.txt'),
//     'this is some data to the file 1',
//     function (err) {
//         if(err) console.error(err);
//         event.emit('write',3);
//     })
// event.emit('write',0)
//Fs . writefile is executed in async manner

//Sync - but Event loop free

event.on('written',function (filenum) {
    if(filenum>4) return
    console.log(`The file ${filenum} has been written`)
    let nextfilenum = filenum+1;
    fs.writeFile(path.join(__dirname,`file${filenum}.txt`),
        `The data is of file number ${filenum}`,
        function () {
            event.emit('written',nextfilenum);
        })
})

event.emit('written',0);