const fs = require('fs');
const path = require('path')
fs.writeFile(path.join(__dirname,'newfile.html'),
    `<!DOCTYPE html>
    <html>
    <head>
    <title>
    My new file
</title>
</head>
<body>
<h4>This file is created from JavaScript at ${new Date()}</h4>
</body>
        </html>`,()=>{
    console.log('Function created a Html File')
    })