const { EmbedBuilder } = require('discord.js');
const moment = require('moment');
module.exports = function (msg) {   
    const mentionedUser = msg.mentions.users.first();
    if (mentionedUser) {
       targetUser = msg.client.users.cache.get(mentionedUser.id);
    } else {
        targetUser = msg.author;
    }
    const exampleEmbed = new EmbedBuilder()
        .setColor("#737b9f")
        .setAuthor({ name: `${targetUser.username} #${targetUser.discriminator}\'s profile`, iconURL: targetUser.displayAvatarURL() })
        .setDescription(`user ID: ${targetUser.id}`)
        .addFields(
            //{ name: 'Regular field title', value: 'Some value here' },
            //{ name: '\u200B', value: '\u200B' },
            { name: 'Joined Discord on', value: `${moment(targetUser.createdAt).format("LL")}`, inline: true },
            { name: 'Member Since ', value: `${moment.utc(targetUser.joinedTimestamp).format("LL")}`, inline: true }, // .fromNow() shows ".. ago"
        )
        .addFields({ name: 'Avatar:', value: '  ', inline: false })
        .setImage(targetUser.displayAvatarURL())
        .setTimestamp()
        .setFooter({ text: 'Provided by Study Companion' });
    msg.channel.send({ embeds: [exampleEmbed] });
}