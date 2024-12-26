const express = require("express");
const rootRouter = require("./routers");
const app = express();

// підʼєднує до app на всі методи міддлвери (в даному випадку - роутера)
app.use(rootRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
