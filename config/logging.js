import { Path } from '@secjs/utils'

export default {
  /*
  |--------------------------------------------------------------------------
  | Default Log Channel
  |--------------------------------------------------------------------------
  |
  | This option defines the default log channel that gets used when writing
  | messages to the logs. The name specified in this option should match
  | one of the channels defined in the "channels" configuration object.
  |
  */

  default: Env('LOG_CHANNEL', 'application'),

  /*
  |--------------------------------------------------------------------------
  | Log Channels
  |--------------------------------------------------------------------------
  |
  | Here you may configure the log channels for your application.
  |
  | Available Drivers:
  |   "console", "discord", "file", "null", "slack", "telegram".
  | Available Formatters:
  |   "cli", "simple", "json", "request", "message".
  |
  */

  channels: {
    application: {
      driver: 'console',
      formatter: 'simple',
    },
    console: {
      driver: 'console',
      formatter: 'cli',
    },
    exception: {
      driver: 'console',
      streamType: 'stderr',

      formatter: 'none',
    },
    request: {
      driver: 'console',
      formatter: 'request',
      formatterConfig: {
        asJson: false,
      },
    },
    discard: {
      driver: 'null',
    },
    file: {
      driver: 'file',
      filePath: Path.logs('athenna.log'),

      formatter: 'simple',
      formatterConfig: {},
    },
    slack: {
      driver: 'slack',
      url: 'your-slack-webhook-url',

      formatter: 'message',
      formatterConfig: {},
    },
    discord: {
      driver: 'discord',
      username: 'Athenna',
      url: 'your-discord-webhook-url',

      formatter: 'message',
      formatterConfig: {},
    },
    telegram: {
      driver: 'telegram',
      chatId: 0,
      parseMode: 'HTML',
      token: 'your-telegram-bot-token',

      formatter: 'message',
      formatterConfig: {},
    },
  },
}
