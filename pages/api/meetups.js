import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    
    res.status(201).json({ message: "Meeup inserted!" });
  }
}

export default handler;
