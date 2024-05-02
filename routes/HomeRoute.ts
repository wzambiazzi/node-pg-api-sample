import { Router } from 'express';

class HomeRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  static healthcheck(req, res) {
    res.status(200).json({
      success: true,
      message: 'OK',
    });
  }

  static version(req, res) {
    res.status(200).json({
      success: true,
      message: 'v1.0',
    });
  }

  init() {
    this.router.get('/healthcheck', HomeRouter.healthcheck);
    this.router.get('/version', HomeRouter.version);
  }
}

const homeRouter = new HomeRouter();
homeRouter.init();

export default homeRouter.router;