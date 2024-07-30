const express = require("express");
const app = express();
const bookRoute = require("./routes/booksRoutes");
const PORT = process.env.PORT || 3000; // Change the port number here
require("./connection/conn");

app.use(express.json());
app.use("/api/v1", bookRoute);

app.listen(PORT, () => {
  console.log("SERVER STARTED SUCCESSFULY");
});
