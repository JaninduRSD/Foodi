const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 6001;
require('dotenv').config()

// Middleware
app.use(cors());
app.use(express.json());


//mongodb config

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@demo-foodi-cluster.h4qqk8i.mongodb.net/?retryWrites=true&w=majority&appName=demo-foodi-cluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //database & collection
    const menuCollections = client.db("demo-foodi-client").collection("menu");
    const cartCollections = client.db("demo-foodi-client").collection("cartItems");


//all menu items operations
    app.get('/menu', async(req,res)=>{
        const result = await menuCollections.find().toArray();
        res.send(result);
    })

    //add to cart(post to db)
    app.post('/carts',async(req,res)=>{
        const cartItem=req.body;
        const result = await cartCollections.insertOne(cartItem);
        res.send(result);
    })

    //get cart using email
    app.get('/carts',async(req, res)=>{
        const email =req.query.email;
        const filter = {email: email};
        const result = await cartCollections.find(filter).toArray();
        res.send(result);
    })






    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
