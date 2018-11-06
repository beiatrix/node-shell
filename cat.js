const fs = require('fs');

function cat(filename) {
  process.stdout.write('prompt > ');

  //contents of the file
  fs.readFile(`./${filename}`, 'utf8', (err, data) => {
    if (err) {
      throw err
    } else {
      console.log(data)
    }
  })

  process.stdout.write('\nprompt > ');
}

module.exports = cat;
