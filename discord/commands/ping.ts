import { Message } from 'discord.js';

export function pingHandler(message: Message) {
    message.reply({
        embeds: [
            {
                title: 'Server Ping',
                color: 0x50FFAB,
                fields: [
                    {
                        name: 'Discord WebSocket/REST API ping',
                        value: `${message.client.ws.ping}ms`,
                    },
                ]
            }
        ]
    });
}