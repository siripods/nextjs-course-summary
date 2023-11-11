import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    // code here is not visible to client-side
    const client = await MongoClient.connect(
      "mongodb+srv://siripods:mongo1siri@cluster0.thb1hcq.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();
    
    res.status(201).json({ message: "Meeup inserted!" });
  }
}

export default handler;
