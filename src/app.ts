import { Server } from "./presentation/server";
import { envs } from "./config/envs";

(() => {
  main();
})();

function main() {
  const server = new Server({
    serverPort: envs.SERVER_PORT || "3000",
    publicPath: envs.PUBLIC_PATH
  });
  server.start();
}