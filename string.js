const client = require("./client");

async function init() {
  //   await client.set("msg:4", "Hey from nodejs");
  await client.expire("msg:4", 10);
  const result = await client.get("name");
  console.log(result);
}

init();
