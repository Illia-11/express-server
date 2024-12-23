const express = require("express");

// app - екземпляр серверу експресса
const app = express();

// app містить функції для побудови маршрутів на сервері
// їх назви відповідають назвам НТТР методів
// приймають першим аргументом - шлях не сервері
// подільші аргументи - функції обробники, які запустяться при запиті

// app.get();
// app.post();
// app.put();
// app.patch();
// app.delete();

// req та res - обʼєкти запиту та відповіді. 
app.get("/", (req, res) => {
  // метод send дозволяє повернути у відповідь стрінгу, обʼєкт, масив, булеве значення без перетворень
  res.send("Hello, World!")
});

app.get("/users", (request, response) => {
  response.send([{}, {}, {}])
});

// app.get();
// app.post();
// app.put();
// app.patch();
// app.delete();

const PORT = 3000;

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});