
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);


client.on('message', message => { 
 
      if(message.content.startsWith ("&خطوبه")) {  
      if(!message.channel.guild) return message.reply('**هذا الامر فقط للسيرفرات**')  
      var proposed = message.mentions.members.first()  
     
      if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تخطب واحده يا ابني**').catch(console.error);  
      if(message.mentions.users.size > 1) return message.reply(' 😳 **بدك تخون بنتي ؟**').catch(console.error); 
       if(proposed === message.author) return message.reply(`**.**`);  ///zezo and alfa codes
        if(proposed === client.user) return message.reply(`** تبي تخطبني وانا بمقام ابوك انقلع **`);  
              message.channel.send(`**${proposed}   
 بنتي هاد شاب بده يخطبك  ${message.author}         
 معك 30 ثانيه
 اكتبي اقبل او لا لو شاب مناسب لك**`)
 
const filter = m => m.content.startsWith("اقبل");
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(collected =>{
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك يا ابنائئ انشاء الله تتجوزا عن قريب** `);
})
 
   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 30000, errors: ['time'] })
.then(collected =>{
   message.channel.send(`  **${message.author} انا متل ابوك بس بنتي ما تبيك ياريت تنقلع** `); ///zezo and alfa codes
 
})
 
     
  } 
 
}); 
