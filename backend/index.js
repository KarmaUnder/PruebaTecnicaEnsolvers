
const server = require('./src/app.js');
const conection = require('./src/dbConnection/connection');

// Syncing all the models at once.
conection().then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
