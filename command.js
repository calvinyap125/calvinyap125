module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#40E0D0')
        .setTitle('Rules')
        .setUrl('https://www.youtube.com/channel/UCNTBJjWFY60d_6U5_USl72g')
        .setDescription('This is a embed for the server rules')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 1', value: 'Be nice'}
        )
        .setImage('https://i.pinimg.com/564x/e6/0a/0c/e60a0c7c3f2833a545be910d671ca2be.jpg')
        .setFooter('HI');

        message.channel.send(newEmbed);
    }
}