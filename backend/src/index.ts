import express from "express";
import "dotenv/config";
import cors from "cors";
import init from "./startup/init";

const app = express();
const port = process.env.BACKEND_PORT || 5000;

app.use(cors());
app.use(express.json());

init(app);

app.get("/", (req, res) => {
  res.send("Root endpoint.");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
