import express from "express";
import { Server } from "http";
import { MonDecorateurDeClasse } from "./decorator";

// commentaire monoligne

/* asdfasdfasdf
asdfasdfasdf
asdfasdfasdf
Commentaire multiligne
*/

@MonDecorateurDeClasse
export class WebServer {
  server: Server;
  options: { port: number };

  constructor(options: { port: number }) {
    this.options = options;
  }

  async start() {
    const app = express();
    const port = this.options.port;

    app.get("/", (req, res) => {
      res.send("Hello World!");
    });
    return new Promise<void>((resolve, reject) => {
      this.server = app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
        resolve();
      });
    });
  }

  stop() {
    return new Promise<void>((resolve, reject) => {
      this.server.close((err) => {
        if (err) {
          reject(err);
          return;
        }
        console.log("Server closed with success");
        resolve();
      });
    });
  }
}
