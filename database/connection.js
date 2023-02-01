const MongoClient=require("mongodb").MongoClient;

const url="mongodb+srv://mahesh:TCPzsJRtO6OQ5HD9@cluster0.obfk2as.mongodb.net/?retryWrites=true&w=majority";

const client=new MongoClient(url);

module.exports=client;