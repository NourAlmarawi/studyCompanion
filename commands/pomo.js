module.exports = function (msg, args) {

    let time = 25*60*1000;
    if (args.length > 0) {
        time = args[0]*60*1000;
    }
    msg.channel.send(`<@${msg.author.id}>\n you'll be reminded after ${time/60000} minutes`);
    setTimeout(() => {
        msg.channel.send(`<@${msg.author.id}>\n well done! ${time/60000} minutes has passed!`);
    }, time);
}