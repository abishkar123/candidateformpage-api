import mongoose from "mongoose"

const candidateSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default:true,
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },

    phonenumber: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },


 skill:{
      type: String,
      required: true,
    },
   
    
  },
  {
    timestamps: true,
  }
)

export default mongoose.model("candiateform;", candidateSchema)
