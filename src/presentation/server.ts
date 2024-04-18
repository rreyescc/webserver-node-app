import express from 'express'
import { envs } from '../config/envs';
import path from 'path';

interface Options {
  serverPort: string,
  publicPath: string
}

export class Server {

  private app = express();
  private readonly serverPort: string;
  private readonly publicPath: string;

  constructor(options: Options) {
    const {serverPort, publicPath} = options
    this.serverPort = serverPort;
    this.publicPath = publicPath;
  }

  start = async () => {
    //* Middlewares
    //* Public Folder
    this.app.use(express.static(this.publicPath));

    this.app.get('*', (req, res) => {
      const indexPath = path.join( __dirname + `../../../${this.publicPath}/index.html` );
      res.sendFile(indexPath);
    })

    this.app.listen(this.serverPort, () => {
      console.log(`running server on port ${this.serverPort}`);
    })

  }

}