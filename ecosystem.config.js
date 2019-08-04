/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const isProduction = require('./utils/isProduction')
require('dotenv').config({
  path: isProduction
    ? path.join(__dirname, '/.env.production')
    : path.join(__dirname, '/.env.development'),
})

module.exports = {
  apps: [
    {
      name: process.env.APP_NAME,
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: process.env.NODE_ENV,
      },
    },
  ],
}
