import { Message } from 'discord.js';

export function aboutHandler(message: Message) {
    message.reply({
        embeds: [
            {
                title: 'About This Server',
                color: 0x50FFAB,
                fields: [
                    {
                        name: 'Bot Developer',
                        value: '<@!882725995810029670>',
                    },
                    {
                        name: 'Server Owner',
                        value: '<@!466751857096654858>',
                    },
                    {
                        name: 'Bot Language',
                        value: 'TypeScript with NodeJS',
                    },
                    {
                        name: 'Bot API library',
                        value: 'https://npmjs.com/package/discord.js',
                    }
                ]
            }
        ]
    });
}