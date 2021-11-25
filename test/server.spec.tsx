import { WebServer } from "../src/WebServer";
import assert from "assert";
import axios from "axios";

describe("Server", () => {
  it("should start and stop", async function () {
    const port = +process.env.ETL_PORT || 5000;
    const server = new WebServer({ port: port });
    await server.start();
    const object = await axios.get(`http://localhost:${port}`);
    assert.equal(object.data, "Hello World!");
    await server.stop();
  });
});
