// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  //gets what user typed
  const cmd = data.toString().trim(); //remove newline

  if (cmd === 'pwd')  {
    // print the working directory
    process.stdout.write(`${process.cwd()}`);
    process.stdout.write('\nprompt > ');
  }
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }

});
