console.log('Starting Service !🤖');

require("dotenv").config();
console.log('dotenv Loaded !🤖');

const Discord = require('discord.js');
console.log('discord.js Loaded !🤖'); 

const client = new Discord.Client({ intents: '3276799' }); // full access 3276799
console.log('discord client created !🤖');

token = (process.env.TOKEN);
client.login(token);
console.log('Login succesful !🤖');

const commandHandler = require('./commands');
console.log('Ready for Commands!🤖');

const mongoose = require('mongoose');
const sandbox = require('./sandbox.js');
const statusTracker = require('./statusTracker.js');
client.on("ready", readyDiscord);
function readyDiscord() {
    mongoose.connect(process.env.MONGOOSE, {
        keepAlive: true
    });
    console.log('Database loaded, linked🤖');
    console.log('Authorized, linked💖');
    sandbox(client);
    statusTracker(client);
    console.log(`watching ${client.guilds.cache.size} servers`);
}

client.on("messageCreate", commandHandler);

const messageCountSchema = require('./data/message-count-schema.js');
client.on("messageCreate", async (msg) => {
    await messageCountSchema.findOneAndUpdate({
        _id: msg.author.id
    }, {
        _id: msg.author.id,
        $inc: {
            messageCount: 1
        }
    }, {
        upsert: true
    })
});

