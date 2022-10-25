const express = require('express');
const app = express();
const CORS = require('cors');
const { dbConnection } = require('../database/config.db');

class Server {
  constructor() {
    this.app = app;
    this.port = process.env.PORT;
    this.authPath = '/api/auth';
    this.connectToDB();
  }

  middlewares() {
    // Public directory
    this.app.use(express.static('public'));

    // CORS
    this.app.use(CORS());

    // Read and parse body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.authPath, require('../routes/auth.route'));
  }

  async connectToDB() {
    await dbConnection();
  }

  execute() {
    // Middlewares
    this.middlewares();

    // Routes
    this.routes();

    // Start server
    this.app.listen(this.port, () => console.log(`Server running on port ${this.port}`));
  }
}

module.exports = Server;
