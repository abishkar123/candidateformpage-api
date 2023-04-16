import express from 'express'
import { postcandidate, readcandidate } from "../model/candidateformModel.js";
const router = express.Router()


//post candidateform
router.post("/",async (req, res , next)=>{
  try {

    const {name} = req.body;
    const result = await postcandidate(req.body);

    if(result?._id){
    return res.json({
        status:"Success",
        message: "candiateform has been submited",
        result,
    })
    }

    res.json({
        status:"error",
        message:"unable to create to submit form"
    })
    
  } catch (error) {
        if (error.message.includes("E11000 duplicate key error collection")) {
          error.errorCode = 200;
          error.message =
            "This category has been alredy created, change the name and try again later";
        }
    error(next);
    
  }
})

// read candidateform
router.post("/",async(req, res , next)=>{
    try {

        const candidatefrom = await readcandidate()
      

    } catch (error) {
      error(next)
      
    }
  })

// delete candidateform
  router.post("/", (req, res , next)=>{
    try {
      
    } catch (error) {
      error(next)
      
    }
  })

// update candiateform
  router.post("/", (req, res , next)=>{
    try {
      
    } catch (error) {
      error(next)
      
    }
  })

export default router;