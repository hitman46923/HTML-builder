
const path = require("path");
const fs = require("fs/promises");
const fileFolder =  path.join(__dirname,  './secret-folder');

 async function secretFolder () {
    const files = await fs.readdir(fileFolder,{ withFileTypes: true } );

try {

    for ( const file of files) {
      

        if (file.isFile()) {
            const filePath = path.join(fileFolder,file.name);
            const stats = await fs.stat(filePath);

            const { name, ext } = path.parse(file.name);

            console.log(`${name} - ${ext.slice(1)} - ${stats.size} bytes`);
           
        }

    }

} catch (err) {
    console.log(err);
}


    
 }
 secretFolder()

 