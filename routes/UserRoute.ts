import { Router } from 'express';
import GeneralError from '../models/GeneralError';
import UserController from '../controllers/UserController';

class UserRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  static get(req, res) {
    try {
      UserController.getAll().then((data) => {
          res.status(200).json(
            data,
          );
        })
        .catch((err) => {
          if (err instanceof GeneralError) {
            console.log(`error: - ${err.getMessageLog()}`);
            res.status(err.httpCode).json(err);
          } else {
            console.log(`error: && ${JSON.stringify({ message: err.message, error: err })}`);
            res.status(500).json('internal error');
          }
        });
    } catch (err) {
      console.log(`error: && ${JSON.stringify({ message: err.message, error: err })}`);
      res.status(500).json('internal error');
    }
  }

  static getAll(req, res) {
    try {
      UserController.getAll().then((data) => {
          res.status(200).json(
            data,
          );
        })
        .catch((err) => {
          if (err instanceof GeneralError) {
            console.log(`error: - ${err.getMessageLog()}`);
            res.status(err.httpCode).json(err);
          } else {
            console.log(`error: && ${JSON.stringify({ message: err.message, error: err })}`);
            res.status(500).json('internal error');
          }
        });
    } catch (err) {
      console.log(`error: && ${JSON.stringify({ message: err.message, error: err })}`);
      res.status(500).json('internal error');
    }
  }

  init() {
    this.router.get('/:id', UserRouter.get);
    this.router.get('/', UserRouter.getAll);
  }
}

const userRouter = new UserRouter();
userRouter.init();

export default userRouter.router;