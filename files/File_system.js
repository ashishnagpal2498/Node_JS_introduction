//FIle system in NODEJS
const fs = require('fs');

//Write file file into
// fs.writefile(Path,data[,options],callback)
fs.writeFile(__dirname+'/file.txt',
    "Hello there , my name is khan , i am writing new file",
    function () {
    //callback function -
    console.log('Yo, file is written ')
    })
//This is an Asynchronus function
//For sync writing separet function
fs.writeFile(__dirname+'/mywebsite.html',
    `<html>
        <head> <title>My page</title> </head>
        <body>
        <h4>My Webpage is Awesome</h4>
        </body>
        </html>    
    `,
    function callb() {
      console.log("Webpage has written")
    }
)
fs.readFile('file.txt',function (err,data) {
    //the first argument of the callback is always an error
    //so that if successful run nhi hua toh
    //it gives a value else - null
    console.log(data.toString());
})

//Streams and buffer
//The size of buffer should be accomodated by both the mediums
//Fs.read V/s fs.readfile
//fs.write V/s Fs.writeFile

//HTTP - client server model
//Path utility of NodeJS
//Creates path on which environment you are running on
//Creating path -

//Events - Node JS
//Reactive Programming -
//how to keep ddata in synchronous manner
