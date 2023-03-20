module.exports =  function (msg) {
    // TODO: set a specific channel for hydration reminder
    setInterval(async () => {
        const channel = client.channels.cache.get('1083393495907188786');
        const emoji = await client.emojis.cache.find(emoji => emoji.name === 'hydrationGirl');
        channel.send(`hydraaateee you IDIOTTT ${emoji}`);
    }, 30 * 60 * 1000); // 30 minutes in milliseconds

}