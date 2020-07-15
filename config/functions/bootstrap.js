'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#bootstrap
 */

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

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

parseDatbaseUrl(process.env.DATABASE_URL)

module.exports = () => {


};

