//why did I make this.
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('owo im awake');
});

client.on('message', message => {
    	if (message.content === '!ping'){
    		message.channel.send('Pong.');
    	}
    	if (message.content === 'owo'){
    		message.channel.send('owo whats this?');
    	}
    	if (message.content === 'OwO'){
    		message.channel.send('owo whats this?');
    	}
    	if (message.content === 'oWo'){
    		message.channel.send('owo whats this?');
    	}
    	if (message.content === 'uwu'){
    		message.channel.send('owo whats this?');
    	}
    	if (message.content === 'UwU'){
    		message.channel.send('owo whats this?');
    	}
    	if (message.content === 'uWu'){
    		message.channel.send('owo whats this?');
    	}
    	if (message.content === 'TuT'){
    		message.channel.send('owo whats this?');
    	}
    	if (message.content === '=3'){
    		message.channel.send('owo whats this?');
    	}
    	if (message.content === 'qWq'){
    		message.channel.send('owo whats this?');
    	}
    });

client.login('token');