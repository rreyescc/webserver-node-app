import express, { Router } from 'express'
import path from 'path';

interface Options {
  serverPort: number
  publicPath?: string
  appRouter: Router
}

export class Server {

  private app = express();
  private readonly serverPort: number;
  private readonly publicPath: string;
  private readonly appRouter: Router;

  constructor(options: Options) {
    const {serverPort, publicPath = 'public', appRouter } = options
    this.serverPort = serverPort;
    this.publicPath = publicPath;
    this.appRouter = appRouter;
  }

  start = async () => {

    //* Middlewares
    this.app.use(express.json()); //support json
    //this.app.use(express.urlencoded({ extended: true })); //support x-www-form-urlencoded


    //* Public Folder
    this.app.use(express.static(this.publicPath));

    // this.app.get('/api/todos', (req, res) => {
    //   res.send([
    //     { id: 1, todo: 'Buy milk', createAt: new Date() },
    //     { id: 2, todo: 'Buy meat', createAt: new Date() },
    //     { id: 3, todo: 'Buy bread', createAt: new Date() }
    //   ])
    // })

    //* Routes
    this.app.use(this.appRouter);

    //* SPA
    this.app.get('*', (req, res) => {
      const indexPath = path.join( __dirname + `../../../${this.publicPath}/index.html` );
      res.sendFile(indexPath);
    })

    this.app.listen(this.serverPort, () => {
      console.log(`running server on port ${this.serverPort}`);
    })

  }

}