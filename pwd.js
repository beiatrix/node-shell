 // print the working directory

 function pwd() {
    process.stdout.write('prompt > ');
    process.stdout.write(`${process.cwd()}`);
    process.stdout.write('\nprompt > ');
 }

 module.exports = pwd;
 