const parseDatbaseUrl = url => {
  const pattern = /[a-z]+:\W\W([a-z]+):([a-z0-9]+)@([a-z0-9-.]+):([0-9]+)\W([a-z0-9]+)/
  const match = pattern.exec(url);
  const [, user, password, host, port, database] = match

  process.env.DATABASE_USERNAME = user
  process.env.DATABASE_PASSWORD = password
  process.env.DATABASE_HOST = host
  process.env.DATABASE_PORT = port
  process.env.DATABASE_NAME = database
}
module.exports = ({ env }) => {

 parseDatbaseUrl(process.env.DATABASE_URL)
  return {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        schema: 'public',
        ssl: { rejectUnauthorized: false }
      },
      options: {},
    },
  },
}
}
