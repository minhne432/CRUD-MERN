const express = require("express");
const app = express();
const bookRoute = require("./routes/booksRoutes");
const cors = require("cors");
const PORT = process.env.PORT || 3001; // Change the port number here
require("./connection/conn");
app.use(cors());
app.use(express.json());
app.use("/api/v1", bookRoute);

app.listen(PORT, () => {
  console.log("SERVER STARTED SUCCESSFULY");
});
