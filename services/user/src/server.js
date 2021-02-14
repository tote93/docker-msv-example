const express = require("express");
const cors = require("cors");

// API CONFIG
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.status(200).send({ status: 200, user: "Jose Luis" });
});
