// Core packages
const path = require("path");

// 3rd party packages
const express = require("express");

const app = express();

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
const adminRouter = require("./routes/admin");
const usersRouter = require("./routes/users");

app.use(adminRouter);
app.use(usersRouter);

// Handle 404 page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
