const Carts = require("../models/Carts");

const getCartByEmail = async(req,res) =>{
    try{
        const email = req.query.email;
        const query = {email: email};
        const result = await Carts.find(query).exec();
        res.json(result);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

//add to cart
const addToCart = async(req, res) =>{
    const {menuItemId, name, recipe, image, category, Price, quentity, email } =req.body;
    try{
        const existingCartItem = await Carts.findOne({menuItemId});
        if(existingCartItem){
            return res.status(400).json({message:"Product already exist in the cart!"})
        }

        const cartItem = await Carts.create({
            menuItemId, name, recipe, image, category, Price, quentity, email
        })
        res.status(201).json({ insertedId: cartItem._id});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
}

module.exports ={
    getCartByEmail,
    addToCart
}