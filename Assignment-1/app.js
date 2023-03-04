const express = require("express");

const app = express();

// Task-2
// app.use((req, res, next) => {
//   console.log("My First Middleware!");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("My Second Middleware!");
//   res.send("<p>Hello from the 2nd middleware </p>");
// });

app.use("/users", (req, res, next) => {
  console.log("This is my user path");
  res.send("Hello from the user route");
});

app.use("/", (req, res, next) => {
  console.log("This is my root path");
  res.send("Hello from the root route");
});

app.listen(3000);
