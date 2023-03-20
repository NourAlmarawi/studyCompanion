const fetch = require('node-fetch');
module.exports = async function (msg, args) {
    keywords = "cute cat";
    if (args.length > 0) {
        keywords = args.join(" ");
    }
    let url = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENORKEY}&=my_test_app&ContentFilter=high`
    let response = await fetch(url);
    let json = await response.json();
    const r = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[r].url);
    console.log(`search for ${keywords}`);
}