const client=require("../database/connection")

const BollywoodData= async (req,res)=>{
  try {
    await client.connect();
    const database=client.db("blogProject");
    const collection=database.collection("BollywoodData");
    const responce= await collection.find();
    const responce1= await responce.toArray();
    console.log("Responce from from server =>",responce1);
    return res.status(200).send({success:responce1})
  } catch (error) {
    console.log("Some error is occured while fetching the data =>",error.message);
    return res.status(500).send({Error:"Somthing went Wrong while fetching the data"});
  }
}

const BollywoodFirstData= async (req,res)=>{
  try {
    await client.connect();
    const database=client.db("blogProject");
    const collection=database.collection("BollywoodFirstData");
    const responce= await collection.find();
    const responce1= await responce.toArray();
    console.log("Responce from from server =>",responce1);
    return res.status(200).send({success:responce1})
  } catch (error) {
    console.log("Some error is occured while fetching the data =>",error.message);
    return res.status(500).send({Error:"Somthing went Wrong while fetching the data"});
  }
}

const  BollywoodTopData= async (req,res)=>{
  try {
    await client.connect();
    const database=client.db("blogProject");
    const collection=database.collection("BollywoodTopData");
    const responce= await collection.find();
    const responce1= await responce.toArray();
    console.log("Responce from from server =>",responce1);
    return res.status(200).send({success:responce1})
  } catch (error) {
    console.log("Some error is occured while fetching the data =>",error.message);
    return res.status(500).send({Error:"Somthing went Wrong while fetching the data"});
  }
}

module.exports.getBollywoodData = BollywoodData;
module.exports.getBollywoodFirstData = BollywoodFirstData;
module.exports.getBollywoodTopData = BollywoodTopData;