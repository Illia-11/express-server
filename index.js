const express = require("express");
const router = require("./routers");
const app = express();

// підʼєднує до app на всі методи міддлвери (в даному випадку - роутера)
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
