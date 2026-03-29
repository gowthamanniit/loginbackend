import User from '../model/UserModel.js'
import Product from '../model/ProductModel.js'

export const login = async(req,res) =>{
    try {
        console.log(req.query)
          
          //const  newUser = new User(req.body);
          //const {username,password}=newUser;

          //const  {email} = newUser;
         // const {username,password}=req.body;
        
        const {username,password}=req.query
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

export const saveitem = async (req,res)=>{
  try{
    //console.log("save data")
    const newdata=new Product(req.body)
    await newdata.save()
    res.status(200).json({message:"products added successfully."});
  }
  catch(error){
    res.status(500).json({errorMessage:error.message})
  }
}

export const getAllProducts = async (req,res) => {
  try{
        const productData = await Product.find();
        if (!productData || productData.length ===0){
              return res.status(404).json({message:"data not found."});
        }
        res.status(200).json(productData);
  }catch(error) {
        res.status(500).json({errorMessage:error.message});
  }
};