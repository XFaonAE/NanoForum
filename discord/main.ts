import { Client, Message, User } from 'discord.js';
import fs from 'fs';
import { pingHandler } from './commands/ping';

const cmdStore = [
    "ping",
    "help",
    "mod" 
];

const handlers = new Map<string, CallableFunction>();
handlers.set('ping', pingHandler);

async function handleCommand(message: Message) {
    const cmd = checkIsCommand(message.content);
    
    if (cmd && handlers.has(cmd)) {
        
    } else if (cmd) {
        try {
            await message.reply({
                embeds: [
                    {
                        title: 'Error',
                        description: 'The command you tried to execute exists but has no handler. Possible Reasons:',
                        color: 0xFF5555,
                        fields: [
                            {
                                name: 'Reason #1',
                                value: 'The command you tried is not finished'
                            },
                            {
                                name: 'Reason #2',
                                value: 'The bot is in developer/debug mode'
                            },
                            {
                                name: 'Reason #3',
                                value: 'The command handling engine is broken, please annoy <@!882725995810029670> to fix the bug'
                            }
                        ]
                    }
                ]
            });
        } catch (e) {
            message.reply('An error occurred while trying to send a message to the user. Please try again later. PLEASE ENABLE EMBED PERMS =uwu=');
        }
    }
}

export function log(text: string) {
    console.log(`[Info] ${text}`);
}

export function userTagPing(author: User) {
    return `<@!${author.id}>`;
}

export function checkIsCommand(message: string): false | string {
    if (message.startsWith('ut!')) {
        let foundCMD = false as false | string;

        cmdStore.forEach(cmd => {
            if (message.startsWith('ut!' + cmd)) {
                foundCMD = cmd;
            }
        });

        return foundCMD;
    }

    return false;
}

function main() {
    const client = new Client({
        intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING']
    });

    client.on('message', message => {
        log(`[${message.channel}] [${message.author.username}] ${message.content}`);

        if (message.channelId === '693862896563781673') {
            if (checkIsCommand(message.content)) {
                message.reply(`Hey ${userTagPing(message.author)}, please don't use commands in the general chat, ty`);
                return;
            }
        }

        if (message.author.bot) {
            return;
        }

        handleCommand(message);
    });

    client.login(fs.readFileSync('token.txt', 'utf8'));
}
 
main();
