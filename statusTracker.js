module.exports = async function (client) {

    const channel = client.channels.cache.get('1087045752284532798');
    const lastPresenceUpdates = {};
    client.on('presenceUpdate', (oldPresence, newPresence) => {
        if (oldPresence && newPresence) {
            const userId = newPresence.user.id;
            const currentTime = Date.now();
            if (oldPresence.status !== newPresence.status) {
                // Check if user's last presence update was more than one second ago
                if (!lastPresenceUpdates[userId] || currentTime - lastPresenceUpdates[userId] > 1000) {
                    channel.send(`${newPresence.user.tag} is now ${newPresence.status}   <t:${Math.floor(Date.now() / 1000)}:R>`);
                    // const now = new Date();
                    // const timeStamp = now.toLocaleString();
                    // channel.send(`${newPresence.user.tag} is now ${newPresence.status}   ${timeStamp}`);
                    lastPresenceUpdates[userId] = currentTime;
                }
            } else {
                // Update user's last presence update timestamp even if status hasn't changed
                lastPresenceUpdates[userId] = currentTime;
            }
        }
    });
}