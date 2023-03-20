const { EmbedBuilder } = require('discord.js');
const moment = require('moment');
module.exports = function (msg) {
    const exampleEmbed = new EmbedBuilder()
        .setColor("#737b9f")
        .setAuthor({ name: `${msg.author.username} #${msg.author.discriminator}\'s profile`, iconURL: msg.author.displayAvatarURL() })
        .setDescription(`user ID: ${msg.author.id}`)
        //  .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            //{ name: 'Regular field title', value: 'Some value here' },
            //{ name: '\u200B', value: '\u200B' },
            { name: 'Joined Discord on', value: `${moment(msg.author.createdAt).format("LL")}`, inline: true },
            { name: 'Member Since ', value: `${moment.utc(msg.author.joinedTimestamp).format("LL")}`, inline: true },
        )
        .addFields({ name: 'Avatar:', value: '  ', inline: false })
        .setImage(msg.author.displayAvatarURL())
        .setTimestamp()
        .setFooter({ text: 'Provided by Study Companion'});
    msg.channel.send({ embeds: [exampleEmbed] });
}