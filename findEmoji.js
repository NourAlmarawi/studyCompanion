module.exports = async function (emojiName) {
    const Discord = require('discord.js');
    const client = new Discord.Client({ intents: '3276799' });
    token = (process.env.TOKEN);
    client.login(token);
    const emoji = await client.emojis.cache.find(emoji => emoji.name === emojiName);
    if (!emoji) return '';
    else return emoji;
}