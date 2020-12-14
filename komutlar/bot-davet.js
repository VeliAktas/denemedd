const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('TikTak Botu Davet Menüsü')
    .addField('<a:elmas:786703055294824528> **Davet Linki**',' https://www.kisa.link/davetbot `')
    .setImage('https://cdn.discordapp.com/attachments/787324985906954300/787985215041175573/350kb_2.gif') 
    .setFooter(`${client.user.username}`, client.user.avatarURL())
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['davetet'],
 permLevel: 0
};

exports.help = {
 name: 'davet'
};