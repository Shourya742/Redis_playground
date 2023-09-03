const client = require("./client");

async function init() {
  await client.lpush("message", "h1y");
  await client.lpush("message", "h1y");
  await client.lpush("message", "h1y");
  await client.lpush("message", "h1y");
  await client.lpush("message", "h1y");
  const result = await client.lrange("message", 0, -1);
  console.log(result);
}

init();
