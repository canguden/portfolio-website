// pages/api/increment.js
import fs from "fs";

export default function handler(req, res) {
  // Read the current count from the file
  const data = fs.readFileSync("./count.json", "utf-8");
  let { count } = JSON.parse(data);

  // Increment the count by 1
  count += 1;

  // Save the updated count to the file
  fs.writeFileSync("../count.json", JSON.stringify({ count }));

  // Return the updated count
  res.status(200).json({ count });
}
