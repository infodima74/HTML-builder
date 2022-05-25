
const path = require('path');
const fs = require('fs');

const put = path.join(__dirname, 'files');
const putCopy = path.join(__dirname, 'files-copy');


fs.rm(putCopy, { recursive:true }, (err) => {
    if(err){
        // File deletion failed
        console.error(err.message);
        return;
    }
    console.log("File deleted successfully");
      
    // List files after deleting
    getCurrentFilenames();
})
fs.mkdir(putCopy, {recursive: true}, (error) => {
    if (error) {
      return console.error(error.message);
    } else {
      fs.readdir(put, {withFileTypes: true}, function (error, dates) {
        if (error) {
          return console.error(error.message);
        }
        dates.forEach((data) => {
          if (data.isFile()) {
            fs.copyFile(path.join(put, data.name), path.join(putCopy, data.name), (error) => {
              if (error) {
                return console.error(error.message);
              }
            });
          }
        });
      });
    }
  });