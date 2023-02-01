const client=require("../database/connection")


const FitnessData= async (req,res)=>{
  try {
    await client.connect();
    const database=client.db("blogProject");
    const collection=database.collection("FitnessData");
    const responce= await collection.find();
    const responce1= await responce.toArray();
    console.log("Responce from from server =>",responce1);
    return res.status(200).send({success:responce1})
  } catch (error) {
    console.log("Some error is occured while fetching the data =>",error.message);
    return res.status(500).send({Error:"Somthing went Wrong while fetching the data"});
  }
}

const FitnessFirstData= async (req,res)=>{
  try {
    await client.connect();
    const database=client.db("blogProject");
    const collection=database.collection("FitnessFirstData");
    const responce= await collection.find();
    const responce1= await responce.toArray();
    console.log("Responce from from server =>",responce1);
    return res.status(200).send({success:responce1})
  } catch (error) {
    console.log("Some error is occured while fetching the data =>",error.message);
    return res.status(500).send({Error:"Somthing went Wrong while fetching the data"});
  }
}

const  FitnessTopData= async (req,res)=>{
  try {
    await client.connect();
    const database=client.db("blogProject");
    const collection=database.collection("FitnessTopData");
    const responce= await collection.find();
    const responce1= await responce.toArray();
    console.log("Responce from from server =>",responce1);
    return res.status(200).send({success:responce1})
  } catch (error) {
    console.log("Some error is occured while fetching the data =>",error.message);
    return res.status(500).send({Error:"Somthing went Wrong while fetching the data"});
  }
}

module.exports.getFitnessData = FitnessData;
module.exports.getFitnessFirstData = FitnessFirstData;
module.exports.getFitnessTopData = FitnessTopData; 