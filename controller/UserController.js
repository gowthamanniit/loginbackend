import User from '../model/UserModel.js'
export const login = async(req,res) =>{
    try {
          const  newUser = new User(req.body);
          const {username,password}=newUser;
          //const  {email} = newUser;
         // const {username,password}=req.body;
          const un = await User.findOne({username,password});
          if(!un) {
                   return res.status(400).json({message : "User not found!!!"});
          }
          //const pw = await User.findOne({password});
          
          //if(!pw) {
            //return res.status(400).json({message : "Invalid credentials!!!"});
   //}
     //      const savedData = await newUser.save();
     //      res.status(200).json(savedData);
             res.status(200).json({message:"login successful"});
    } catch (error) {
       res.status(500).json({errorMessage:error.message})
    }
};
