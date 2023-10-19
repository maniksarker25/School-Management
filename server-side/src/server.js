const app = require("./app");
const { port } = require("./secret");

app.listen(
  (port,
  () => {
    console.log(`School is running port : ${port}`);
  })
);
