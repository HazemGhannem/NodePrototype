

const validator  = async (req, res, next) => {
    //Logic
    // const {token,id} = req.query
    // console.log(req.query)
    // if (!token || !id ){
    //   throw new Error(" Invalid request")
    // }
    // if(!isValidObjectId(id)){
    //   throw new Error(" Invalid User")
    // }
    // const user = await User.findById(id)
    // if (!user){
    //   throw new Error("User Not Found ")
    // }  
    // const reset = await resettoken.findOne({ owner : user._id})
    // if(!reset){
    //   throw new Error("reset token not found")
    // }
    // const isvalid= await await bcrypt.compareSync(token, reset.vtoken)
    // if(!isvalid){
    //   throw new Error("reset token is not invalid")
    // }
    // req.user=user
    next()
  }
  
  module.exports = {validator}