// pages/api/views.js
import fs from "fs";

export default function handler(req, res) {
  // Read the current count from the file
  const data = fs.readFileSync("./count.json", "utf-8");
  const { count } = JSON.parse(data);

  // Return the count
  res.status(200).json({ count });
}
