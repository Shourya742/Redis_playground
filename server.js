const express = require("express");
const axios = require("axios").default;
const client = require("./client");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
  const cacheValue = await client.get("todos");
  if (cacheValue) return res.json(JSON.parse(cacheValue));
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  await client.set("todos", JSON.stringify(data));
  await client.expire("todos", 30);
  return res.status(200).json(data);
});

app.listen(9000, () => {
  console.log("App is running on PORT: 9000");
});
