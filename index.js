const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "!";

Client.on("ready", () => {
    console.log("Conecté");

});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //commande ping 
    if (message.content === prefix + "ping"){
        message.reply("PONG")
    }
    //commande help
    else if (message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setTitle("**Liste des commandes**")
            .setColor("#FFDA33")
            .setURL("https://discord.js.org")
            .setDescription("voici la liste des commande du bot")
            .addField("!ping", "renvoie pong")
            .addField("!help", "affiche la liste des commandes")
            .setThumbnail("https://cdn.discordapp.com/avatars/265416815411331072/92ddc6b2d1acbdf8cd62ec03de8a9423.png?size=1024");
        message.channel.send({ embeds: [embed]});
    } 
    //commande tournoi 
    else if (message.content === prefix + "21h"){
        const embed21h = new Discord.MessageEmbed()
            .setTitle("**TOURNOI POUR 21H20**")
            .addField("**Liste des inscrit**", "``` ```")
        message.channel.send({ embeds: [embed21h]});
    }
    
});


Client.login(process.env.TOKEN);