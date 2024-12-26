const express = require("express");
const rootRouter = require("./routers");
const app = express();

const bodyParser = express.json();
// підʼєднує до app на всі методи міддлвери обробки json даних
app.use(bodyParser);

// підʼєднує до app на всі методи міддлвери роутера
app.use(rootRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
