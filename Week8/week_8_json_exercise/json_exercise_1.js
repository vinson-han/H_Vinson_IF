const fs = require("fs");
fs.readFile("./dummyData.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }

  let jsonParse = JSON.parse(jsonString);
  console.log(jsonParse);
});
