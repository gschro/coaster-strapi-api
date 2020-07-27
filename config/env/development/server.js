module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env('PORT', 1337),
  proxy: {
    enabled: false
  },
  cron: {
    enabled: false
  },
  admin: {
    autoOpen: false,
    url: '/tycoon',
    auth: {
      secret: env('JWT_SECRET'),
    },
  },
});