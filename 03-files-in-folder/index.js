const fs = require('fs');

const path = require('path');

fs.readdir( path.join( __dirname, 'secret-folder' ), function ( err, files ) {
    if ( err ) { return console.error(error.message);}
        files.forEach(( file ) => {
            const fileInfo = path.join(__dirname, 'secret-folder', file);
            fs.stat( fileInfo, (err, file) => {
                if (err) { return console.error(error.message);} 
                else if( file.isFile() ) {
                console.log( `${path.parse(fileInfo).name} - ${path.extname(fileInfo).slice(1)} - ${ Math.round(file.size / 1024)}kb` )
                }
            });
        });
});
