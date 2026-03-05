const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const client = new MongoClient("mongodb://127.0.0.1:27017");

let db;

async function start(){
 await client.connect();
 db = client.db("studentDB");
 console.log("MongoDB Connected");
}

start();

app.post("/notes", async (req,res)=>{

 const note=req.body;

 const result=await db.collection("notes").insertOne(note);

 res.send(result);

});

app.get("/notes", async (req,res)=>{

 const notes=await db.collection("notes").find().toArray();

 res.send(notes);

});

app.put("/notes/:id", async (req,res)=>{

 const id=req.params.id;

 await db.collection("notes").updateOne(
 { _id:new ObjectId(id) },
 { $set:req.body }
 );

 res.send("Updated");

});

app.delete("/notes/:id", async (req,res)=>{

 const id=req.params.id;

 await db.collection("notes").deleteOne(
 { _id:new ObjectId(id) }
 );

 res.send("Deleted");

});

app.listen(3000,()=>{
 console.log("Server running on port 3000");
});