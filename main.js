const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '!'

client.on("ready", () => {
    console.log('CalvinBot is online and ready to go!');
    client.user.setActivity('Myself :D', { type: 'PLAYING' });
    client.user.setActivity('abcdefg', { type: 'LISTENING' });
    client.user.setActivity('!help', {type: 'PLAYING' });
 });

client.on('message', message =>{ 

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'commands'){
        message.channel.send("--> !hi !born !morning !afternoon !night !calvin !where !who !website !youtube !twitch !ty !ok !bye !shit !helikopter !snoopy !psyduck !pooky !patrick !patrick2 !patrick3 !patrick4 !squidward !spongebob !babyyoda !stitch !pingu !boo !teddy !pikachu !chicken !duck !bear !bruni !tom !jerry !tomandjerry ");
    }else if(command === 'help'){
        message.channel.send("do !commands");  
    }else if(command === 'ping'){
        message.channel.send("pong");  
    }else if(command === 'pong'){
        message.channel.send("ping");
    }else if(command === 'born'){
        message.channel.send("29/12/2021 [11:17a.m] (Wednesday)");  
    }else if(command === 'morning'){
        message.channel.send("Morning, don't have a good day, have a great day!");
    }else if(command === 'hi'){
        message.channel.send("Hi, I'm a bot!");
    }else if(command === 'youtube'){
        message.channel.send("https://www.youtube.com/channel/UCNTBJjWFY60d_6U5_USl72g");
    }else if(command === 'twitch'){
        message.channel.send("https://www.twitch.tv/calvinyap125");
    }else if(command === 'calvin'){
        message.channel.send("I'm here!");
    }else if(command === 'afternoon'){
        message.channel.send('wassup, happy afternoon.');
    }else if(command === 'night'){
        message.channel.send('goodnight! and get out.');
    }else if(command === 'event'){
        message.channel.send("The dinner will be at Velocity!");
    }else if(command === 'where'){
        message.channel.send("I'm inside Calvin's PC.");
    }else if(command === 'ty'){
        message.channel.send('welcome');
    }else if(command === 'ok'){
        message.channel.send("good thanks bye!");
    }else if(command === 'bye'){
        message.channel.send("Didn't ask ratio'd bye!");
    }else if(command === 'who'){
        message.channel.send("I'm gay");
    }else if(command === "shit"){
        message.channel.send(":poop::shit:");
    }else if(command === "website"){
        message.channel.send("https://calvinyap125.wixsite.com/calvinyap");
    }else if(command === 'snoopy'){
        message.channel.send("https://i.pinimg.com/564x/ca/b9/89/cab989e73ab3289f8947c005f4ffffe8.jpg");
    }else if(command === 'psyduck'){
        message.channel.send("https://media.discordapp.net/attachments/925594125015863447/926015590836097035/psyduck.jpg");
    }else if(command === 'helikopter'){
        message.channel.send("https://i.pinimg.com/originals/67/c6/b3/67c6b3c6117aa719ccc1e6aa4a32563b.gif");
    }else if(command === 'selfierose'){
        message.channel.send("https://i.pinimg.com/564x/d8/ac/e1/d8ace109f6595b4784a616d6a45bf766.jpg");
    }else if(command === 'rose'){
        message.channel.send("https://i.pinimg.com/564x/c1/6b/c8/c16bc8ab26635ba74682afb9c68f156f.jpg");
    }else if(command === 'pooky'){
        message.channel.send("https://i.pinimg.com/564x/1b/42/5d/1b425d012b69b305562c8cc40c54d436.jpg");
    }else if(command === 'teddy'){
        message.channel.send("https://i.pinimg.com/564x/c7/58/fb/c758fb102f4db0d5b02dfe9b93b4f24d.jpg");
    }else if(command === 'boo'){
        message.channel.send("https://i.pinimg.com/736x/cb/81/dd/cb81dd94412a2767cd81f6b037fbc1d7.jpg");
    }else if(command === 'patrick'){
        message.channel.send("https://i.pinimg.com/564x/58/ac/2e/58ac2e722527319666603da8a7570f53.jpg");
    }else if(command === 'pingu'){
        message.channel.send("https://i.pinimg.com/564x/12/ff/b7/12ffb78fd2e930c6f01916e68f41207c.jpg");
    }else if(command === 'blackpink'){
        message.channel.send("https://i.pinimg.com/564x/b6/df/15/b6df150bd44e414aa6bcbc05555ef7b6.jpg");
    }else if(command === 'twice'){
        message.channel.send("https://i.pinimg.com/564x/f9/25/4c/f9254c59003af8644588e72b7693900e.jpg");
    }else if(command === 'sana'){
        message.channel.send("https://media.discordapp.net/attachments/925594125015863447/926320986998079548/IMG_20211231_114655.jpg?width=501&height=613");
    }else if(command === 'pikachu'){
        message.channel.send("https://i.pinimg.com/564x/45/54/7b/45547bc5e1d5be4ef5ca60db23a199c0.jpg");
    }else if(command === 'patrick2'){
        message.channel.send("https://i.pinimg.com/564x/8e/fd/eb/8efdebd2c94e748ab2d90d5d8fad08da.jpg");
    }else if(command === 'chicken'){
        message.channel.send("https://i.pinimg.com/564x/e6/7b/15/e67b152a2414d6c04af703290d1692fa.jpg");
    }else if(command === 'pooh'){
        message.channel.send("https://i.pinimg.com/564x/87/ac/ee/87acee7e73b109db322f5649f16cbad6.jpg");
    }else if(command === 'rose2'){
        message.channel.send("https://i.pinimg.com/564x/1a/0f/65/1a0f651c567c6ca02c17d0e69806c329.jpg");
    }else if(command === 'patrick3'){
        message.channel.send("https://i.pinimg.com/564x/f0/48/73/f04873e138726551d06ecc3745579aa7.jpg");
    }else if(command === 'squidward'){
        message.channel.send("https://i.pinimg.com/564x/77/e9/36/77e9363904d01758245ac168ef8dce3f.jpg");
    }else if(command === 'spongebob'){
        message.channel.send("https://i.pinimg.com/564x/df/b1/41/dfb14151927fe2821a1c780b72ae2ad2.jpg");
    }else if(command === 'babyyoda'){
        message.channel.send("Baby Yoda actual name is Grogu");
        message.channel.send("https://i.pinimg.com/564x/d8/22/f8/d822f846bf1c0c8dc8ae74d35bd9925b.jpg");
    }else if(command === 'stitch'){
        message.channel.send("https://i.pinimg.com/564x/fa/89/f6/fa89f6ccea3e325dfb4a6bece1007e98.jpg");
    }else if(command === 'patrick4'){
        message.channel.send("https://i.pinimg.com/564x/ac/0b/81/ac0b81ea7dfe8be2bbb4697d7a53ebe4.jpg");
    }else if(command === 'bear'){
        message.channel.send("https://i.pinimg.com/564x/d9/5f/e3/d95fe3744837d152ea69335b2db57c8c.jpg");
    }else if(command === 'bruni'){
        message.channel.send("https://i.pinimg.com/originals/f3/53/a5/f353a5caaff4e6af7c560cebe721faf6.gif");
    }else if(command === 'tom'){
        message.channel.send("https://i.pinimg.com/564x/16/9f/72/169f72e28f26290e54a1f831b6c4714e.jpg");
    }else if(command === 'jerry'){
        message.channel.send("https://i.pinimg.com/564x/16/bd/ca/16bdcaea1955c6ddc55a0cfe2f982a69.jpg");
    }else if(command === 'tomandjerry'){
        message.channel.send("https://i.pinimg.com/564x/dc/7d/e7/dc7de75ce18b18d12b28d46ec6102972.jpg");
    }else if(command === 'duck'){
        message.channel.send("https://i.pinimg.com/564x/46/a1/b6/46a1b63b471251900b200b33c93b43c1.jpg");
    }else if(command === 'jisoo'){
        message.channel.send("https://i.pinimg.com/564x/08/12/68/0812685bf8f818a01829bf0d50a244b0.jpg");
    }else if(command === 'jennie'){
        message.channel.send("https://i.pinimg.com/564x/dd/c6/45/ddc64577daf13e09c2818ae1d707b1f0.jpg");
    }else if(command === 'lisa'){
        message.channel.send("https://i.pinimg.com/736x/98/e2/9e/98e29ed184a93d2d352cf4e965669654.jpg");
    }

});

client.login('OTI1NTcxODEwNTM0MjI3OTk4.YcvD6w.a61jSZVxXKM0XYSTrU03YXpN8u8');