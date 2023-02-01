const client=require("../database/connection")

const TechnologyFirstData= async (req,res)=>{
  try {
    await client.connect();
    const database=client.db("blogProject");
    const collection=database.collection("TechnologyFirstData");
    const responce= await collection.find();
    const responce1= await responce.toArray();
    console.log("Responce from from server =>",responce1);
    return res.status(200).send({success:responce1})
  } catch (error) {
    console.log("Some error is occured while fetching the data =>",error.message);
    return res.status(500).send({Error:"Somthing went Wrong while fetching the data"});
  }
}

const TechnologyData= async (req,res)=>{
  try {
    await client.connect();
    const database=client.db("blogProject");
    const collection=database.collection("TechnologyData");
    const responce= await collection.find();
    const responce1= await responce.toArray();
    console.log("Responce from from server =>",responce1);
    return res.status(200).send({success:responce1})
  } catch (error) {
    console.log("Some error is occured while fetching the data =>",error.message);
    return res.status(500).send({Error:"Somthing went Wrong while fetching the data"});
  }
}

const  TechnologyTopData= async (req,res)=>{
  try {
    await client.connect();
    const database=client.db("blogProject");
    const collection=database.collection("TechnologyTopData");
    const responce= await collection.find();
    const responce1= await responce.toArray();
    console.log("Responce from from server =>",responce1);
    return res.status(200).send({success:responce1})
  } catch (error) {
    console.log("Some error is occured while fetching the data =>",error.message);
    return res.status(500).send({Error:"Somthing went Wrong while fetching the data"});
  }
}


module.exports.getTechnologyData = TechnologyData;
module.exports.getTechnologyFirstData = TechnologyFirstData;
module.exports.getTechnologyTopData = TechnologyTopData;