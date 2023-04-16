import candidateformSchema from "./candidateformSchema.js";

export const postcandidate = (obj) =>{
    return candidateformSchema.save()
}

export const readcandidate = ()=>{
    return candidateformSchema.findOne()
};

export const deletecandidate = (_id)=>{
    return candidateformSchema.findByIdAndDelete(_id)

}

export const updatecandidate = (_id, ...rest)=>{
  return candidateformSchema.findByIdAndUpdate(_id, rest, {new: true});
}