const express = require("express");

// app - екземпляр серверу експресса
const app = express();

const users = [
  { id: 0, email: "email1@gmail.com", password: "12345admin" },
  { id: 1, email: "email2@gmail.com", password: "765427hg" },
  { id: 2, email: "email3@gmail.com", password: "hdsh7" },
  { id: 3, email: "email4@gmail.com", password: "nbcxmdt8" },
  { id: 4, email: "email5@gmail.com", password: "1235nfsbns" },
];

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
app.get(
  "/",
  // проміжний обробник запиту (мідлвер)
  (req, res, next) => {
    console.log("callback 1");
    req.data = { id: 5 };
    // каже, що мідлвер зробив своє діло і можна викликати наступний обробник у ланцюжку
    next();
  },
  // проміжний обробник запиту (мідлвер)
  (req, res, next) => {
    console.log("callback 2");
    console.log(req.data.id); // 5
    next();
  },
  // проміжний обробник запиту (мідлвер)
  (req, res, next) => {
    console.log("callback 3");

    const isRequestValid = Math.random() > 0.5;
    if(isRequestValid) {
      next();
    } else {
      res.send("Invalid data");
    }
  },
  // кінцевий обробник запиту
  (req, res, next) => {
    console.log("callback 4");
    // метод send дозволяє повернути у відповідь стрінгу, обʼєкт, масив, булеве значення без перетворень
    res.send("Hello, World!")
});

app.get("/users", (request, response) => {
  response.send(users);
});

const PORT = 3000;

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});