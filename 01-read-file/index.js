const fs = require('fs');
//import * as fs from 'node:fs';
const path = require('path');
let pathFile = path.join('./01-read-file/', 'text.txt');
  
function read(pathFile) {
    const readableStream = fs.createReadStream(pathFile);

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        console.log(chunk.toString());
    })
}

read( pathFile)