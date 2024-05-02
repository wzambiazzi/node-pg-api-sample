import * as express from 'express';
import * as bodyParser from 'body-parser';
import { DataSource } from "typeorm"
import HomeRouter from './routes/HomeRoute';
import UserRouter from './routes/UserRoute';
import "reflect-metadata"

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    //App.createConnectionPool();
    this.routes();
  }

  private middleware(): void {
    this.express.use(bodyParser.json({ limit: "50mb", type: 'application/json' }));
    this.express.use(bodyParser.text());
    this.express.use(bodyParser.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000 }));

    this.express.set('view engine', 'ejs');

    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
      next();
    });
  }

  private routes(): void {
    this.express.use(`/`, HomeRouter);
    this.express.use(`/user/`, UserRouter);
  }

  // static createConnectionPool() {
  //   const AppDataSource = new DataSource({
  //     type: "postgres",
  //     host: "localhost",
  //     port: 5432,
  //     username: "postgres",
  //     password: "1q2w3eS",
  //     database: "teste01",
  //     //entities: [Photo],
  //     synchronize: true,
  //     logging: false,
  //   });

  //   AppDataSource.initialize()
  //     .then(() => {
  //         console.log('conectou na base')
  //     })
  //     .catch((error) => console.log(error));
  // }
}
export default new App().express;
