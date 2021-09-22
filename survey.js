const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let container = ""; 

rl.question('What do you think of Node.js? ', (answer) => {
  container = `Thank you for your valuable feedback: \n${answer}\n`;
  //console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
    container += `${answer}\n`;
    //console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question(`What's an activity you like doing? `, (answer) => {
      container += `${answer}\n`;
      //console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question(`What do you listen to while doing that? `, (answer) => {
          container += `${answer}\n`;
          //console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
              container += `${answer}\n`;
              //console.log(`Thank you for your valuable feedback: ${answer}`);
                rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
                  container += `${answer}\n`;
                  //console.log(`Thank you for your valuable feedback: ${answer}`);
                   rl.question(`Which sport is your absolute favourite? `, (answer) => {
                    container += `${answer}\n`;
                    //console.log(`Thank you for your valuable feedback: ${answer}`);
                      rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
                        container += `${answer}\n`;
                        console.log(`\n${container}`);
                        rl.close();
                      });
                    });
                  });
                });
              });
            });
          });
        });