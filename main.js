require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log('ilovemsws-bot reporting for shift!');
});

client.on('messageCreate', (message) => {
  const notionKeywords = ['project updates', 'notion', 'help'];

  if (notionKeywords.some((keyword) => message.content.includes(keyword))) {
    if (message.author['bot']) return;

    message.reply(
      `Here's the link to our Notion (https://www.notion.so/MSW-Innovation-Interest-Group-548f8e2b970643bdbb0d67e179a1d460) page! Let me know again if you need more help!`
    );
  }
});

client.login(process.env.TOKEN);
