/*const { stdin, stdout } = process;
stdin.on('data', data => stdout.write(data));
process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));*/
/*
const { stdin, stdout } = process;

stdout.write('Как тебя зовут?\n')
stdin.on('data', data => {
  const name = data.toString();
  const reverseName = name.split('').reverse().join('');
  stdout.write(`\nТвоё имя наоборот ${reverseName}`);
  //process.exit();
});*//*
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();*/


const path = require('path');

const fs = require('fs');


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const writableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

rl.write('Enter your text!\n');

rl.on('line', (text) => {
  if (text.trim() === 'exit') rl.close();
  writableStream.write(`\n${text}\n`, error => {
    if (error) throw error;
  });
});
rl.on('close', () => {
    process.exit();
  });
  process.on('SIGTERM', () => {
    process.exit();

  });
  process.on('exit', code => {
    if (code === 0) {
      console.log('goodbye!');
    } else {
      console.log(`errors${code}`);
    }
  });
