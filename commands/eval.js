module.exports = async function (message, args) {
    if (message.author.id !== '760456056366563358') return;
    // Evaluate the code and send the result to the channel
    try {
        const code = args.join(' ');
        let evaled = eval(code);

        if (typeof evaled !== 'string') {
            evaled = require('util').inspect(evaled);
        }

        message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }
}