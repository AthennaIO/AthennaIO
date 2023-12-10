import { Path } from '@athenna/common'

export default {
  default: Env('LOG_CHANNEL', 'stack'),

  channels: {
    stack: {
      driver: 'stack',
      channels: ['simple']
    },

    simple: {
      driver: 'console',
      level: 'trace',

      formatter: 'simple'
    },

    discard: {
      driver: 'null'
    },

    file: {
      driver: 'file',
      level: 'trace',
      filePath: Path.logs('athenna.log'),

      formatter: 'simple',
      formatterConfig: {}
    },

    slack: {
      driver: 'slack',
      level: 'fatal',
      url: 'your-slack-webhook-url',

      formatter: 'message',
      formatterConfig: {}
    },

    discord: {
      driver: 'discord',
      level: 'fatal',
      username: 'Athenna',
      url: 'your-discord-webhook-url',

      formatter: 'message',
      formatterConfig: {}
    },

    telegram: {
      driver: 'telegram',
      level: 'fatal',
      chatId: 0,
      parseMode: 'HTML',
      token: 'your-telegram-bot-token',

      formatter: 'message',
      formatterConfig: {}
    }
  }
}
