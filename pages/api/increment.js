// pages/api/increment.js
let count = 24323;

export default function handler(req, res) {
  count += 1;
  res.status(200).json({ count });
}
