import { createServer } from "http";
import Events from "events";
import { onData } from "./helper/onData.js";

const PORT = 3000;
const myEvent = new Events();

const handler = async (request, response) => {
  myEvent.once("data", onData);
  myEvent.emit("data", Date.now());
  response.write("OK\n");
  response.end();
};

createServer(handler).listen(PORT, () =>
  console.log("Running at ".concat(PORT))
);
