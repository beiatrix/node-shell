// Output a prompt
const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  //gets what user typed
  const cmd = data.toString().trim(); //remove newline
  const filename = cmd.slice(4);

  if (cmd === 'pwd') {
    pwd()
  } else if ( cmd === 'ls') {
    ls()
  } else if (cmd.includes("cat") && filename !== null) {
    //if cmd includes "cat" and <filename>
    cat(filename)
  }
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
