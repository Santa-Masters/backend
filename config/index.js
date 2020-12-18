require('dotenv').config()

const config = {
  api: {
    port: process.env.PORT || 3000,
  },
  frontendUrl: process.env.urlFrontend,
}



module.exports = config;
