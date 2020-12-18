const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const config = require('./config');
const routes = require('./network/routes');

const app = express();

//configuration
if (config.dev === 'production') {
  const corsOptions = { origin: config.frontend.frontendUrl };
  app.use(cors(corsOptions));
} else {
  app.use(cors());
}
app.use(express.json())

//routes
routes(app);


//midlewares


//server up
app.listen(config.api.port, () => {
  console.log(`${chalk.green('[Api]')} Server is running in http://localhost:${config.api.port}`);
});
