const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('TikTak Botu Yardım Menüsü')
    .addField('<a:elmas:786703055294824528> **eğlence**','`!eğlence : Eğlence Komutları Gösterir!`')
    .addField('<a:elmas:786703055294824528> **Moderasyon**','`!moderasyon : Moderasyon Komutları Gösterir!`')
    .addField('<a:elmas:786703055294824528> **davet**','`!davet : Botumuzu Davet Edersiniz!`')
    .setImage('https://cdn.discordapp.com/attachments/787324985906954300/787985215041175573/350kb_2.gif') 
    .setThumbnail('https://cdn.discordapp.com/attachments/787324985906954300/787961828419698698/JWbCo7Xk_400x400.png')
    .setFooter(`${client.user.username}`, client.user.avatarURL())
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y'],
 permLevel: 0
};

exports.help = {
 name: 'yardım'
};