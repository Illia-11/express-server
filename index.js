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