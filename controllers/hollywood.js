 const client=require("../database/connection")

const HollywoodData= async (req,res)=>{
  try {
    await client.connect();
    const database=client.db("blogProject");
    const collection=database.collection("HollywoodData");
    const responce= await collection.find();
    const responce1= await responce.toArray();
    console.log("Responce from from server =>",responce1);
    return res.status(200).send({success:responce1})
  } catch (error) {
    console.log("Some error is occured while fetching the data =>",error.message);
    return res.status(500).send({Error:"Somthing went Wrong while fetching the data"});
  }
}

const HollywoodFirstData= async (req,res)=>{
  try {
    await client.connect();
    const database=client.db("blogProject");
    const collection=database.collection("HollywoodFirstData");
    const responce= await collection.find();
    const responce1= await responce.toArray();
    console.log("Responce from from server =>",responce1);
    return res.status(200).send({success:responce1})
  } catch (error) {
    console.log("Some error is occured while fetching the data =>",error.message);
    return res.status(500).send({Error:"Somthing went Wrong while fetching the data"});
  }
}

const  HollywoodTopData= async (req,res)=>{
  try {
    await client.connect();
    const database=client.db("blogProject");
    const collection=database.collection("HollywoodTopData");
    const responce= await collection.find();
    const responce1= await responce.toArray();
    console.log("Responce from from server =>",responce1);
    return res.status(200).send({success:responce1})
  } catch (error) {
    console.log("Some error is occured while fetching the data =>",error.message);
    return res.status(500).send({Error:"Somthing went Wrong while fetching the data"});
  }
}


module.exports.getHollywoodData = HollywoodData;
module.exports.getHollywoodFirstData = HollywoodFirstData;
module.exports.getHollywoodTopData = HollywoodTopData;