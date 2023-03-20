const commands = {};
const fs = require('fs');
const path = require('path');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    try {
        const command = require(path.join(__dirname, 'commands', file));
        const commandName = file.slice(0, -3);
        commands[commandName] = command;
    } catch (error) {
        console.error(`Failed to load command ${file}: ${error}`);
    }
}

module.exports = async function (msg) {
    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) === '!' && commands.hasOwnProperty(command.substring(1))) {
        command = command.substring(1);
        try {
            commands[command](msg, tokens);
            console.log(`🔰${command} command recieved`);
        }
        catch (err) {
            console.log(`Error occured ⛔⛔⛔⛔\n${err}`);
            console.log(msg);
        }

    }
}
