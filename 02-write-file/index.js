const fs = require("fs");

 const path = require("path");

 const filePath = path.join(__dirname , "02-write-file.txt" );

const writeStream = fs.createWriteStream(filePath , 'utf-8');

process.stdout.write('Hello here! Write your text  ');
process.stdin.on ('data' , (data) => {
    
    
} )



