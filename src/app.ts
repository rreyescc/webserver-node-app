import { Server } from "./presentation/server";
import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";

(() => {
  main();
})();

function main() {
  const server = new Server({
    appRouter: AppRoutes.routes,
    serverPort: envs.PORT,
    publicPath: envs.PUBLIC_PATH
  });
  server.start();
}