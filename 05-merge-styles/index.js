const fs = require('fs');
const path = require('path');

const folderstyles = path.join(__dirname, 'styles');
const bundle = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));


fs.readdir(folderstyles, {withFileTypes: true}, function (error, styles) {
    if (error) {
      return console.error(error.read);
    }
    styles.forEach((style) => {
        
      if (style.isFile() && path.extname(style.name) === '.css')
         { const newStyle = fs.createReadStream(path.join(folderstyles, style.name), 'utf-8');
           newStyle.pipe(bundle, { end: false });
         }
    });
});