const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://user_ece:eceparis@ecedashboard.5cl4l.mongodb.net/ecedashboard?retryWrites=true&w=majority";
  

// Create a new MongoClient
const client = new MongoClient(uri, {
  useUnifiedTopology: true
});

exports.run = async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("ecedashboard").command({ ping: 1 });
    console.log("Connected successfully to server");
    return client;
  } catch(e) {
    console.error(e)
  }
}

exports.client = client