module.exports = async function (client) {

    const emojiFind = require('./findEmoji.js');
    const myEmoji = await emojiFind('hydrationGirl');
    console.log('Sandbox 📦');
    // const channel = client.channels.cache.get('1084856695114715157');

    // const lastPresenceUpdates = {};

    // client.on('presenceUpdate', (oldPresence, newPresence) => {
    //     if (oldPresence && newPresence) {
    //         const userId = newPresence.user.id;
    //         const currentTime = Date.now();
    //         if (oldPresence.status !== newPresence.status) {
    //             // Check if user's last presence update was more than one second ago
    //             if (!lastPresenceUpdates[userId] || currentTime - lastPresenceUpdates[userId] > 1000) {
    //                 console.log(`${newPresence.user.tag} is now ${newPresence.status}`);
    //                 lastPresenceUpdates[userId] = currentTime;
    //             }
    //         } else {
    //             // Update user's last presence update timestamp even if status hasn't changed
    //             lastPresenceUpdates[userId] = currentTime;
    //         }
    //     }
    // });
} 