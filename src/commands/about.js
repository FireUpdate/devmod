/*
* Gabe Dunn 2018
* File that handles the about command.
*/

import { Command } from 'discord-akairo'
import colours from '../colours'
import { msgDeleteTime } from '../config'

export default class PingCommand extends Command {
  constructor () {
    super('about', {
      aliases: ['about'],
      category: 'util',
      description: 'Tells a little bit about the bot.',
      cooldown: 1000 * msgDeleteTime,
      ratelimit: 1
    })
  }

  // noinspection JSMethodCanBeStatic
  async exec (message) {
    try {
      await message.delete(1)
      const user = message.member ? message.member.user : message.author
      return message.util.send({
        embed: {
          title: 'DevMod - About the Bot',
          color: colours.blue,
          url: 'https://github.com/redxtech/devmod',
          description: 'PizzaBot Is A Bot Made For The CroBy™ Community, But' +
          ' Its Not Applicable To Any Server That Needs Moderating. It Is Written' +
          ' With `discord-akairo` & `discord.js`. Made By The User Fire#5421.' +
          ' To Join The Official Server Follow The Link Down Below!',
          fields: [
            {
              name: 'Author:',
              value: 'Fire#5421',
              inline: true
            },
            {
              name: 'Official Server:',
              value: 'https://discord.gg/5qfWyTn',
              inline: true
            }
          ],
          author: {
            name: user.username,
            icon_url: user.avatarURL
          },
          timestamp: new Date()
        }
      })
    } catch (e) {
      console.log(`Error sending about message: ${e}`)
      return null
    }
  }
}

