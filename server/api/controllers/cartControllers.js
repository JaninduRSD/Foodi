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
    const {menuItemId, name, recipe, image, category, price, quentity, email } =req.body;
    try{
        const existingCartItem = await Carts.findOne({menuItemId});
        if(existingCartItem){
            return res.status(400).json({message:"Product already exist in the cart!"})
        }

        const cartItem = await Carts.create({
            menuItemId, name, recipe, image, category, price, quentity, email
        })
        res.status(201).json({ insertedId: cartItem._id});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
}

//delete a cart item
const deleteCart = async (req, res) =>{
    const cartId = req.params.id;
    try{
        const deletedCart = await Carts.findByIdAndDelete(cartId);
        if(!deletedCart){
            return res.status(401).json({message: "Cart Items not found!"})
        }
        res.status(200).json({message:"Cart Item deleted"})
    }catch(error){
        res.status(500).json({ message: error.message });
    }
};

//update a cart item
const updateCart = async(req, res) =>{
    const cartId = req.params.id;
    const {menuItemId, name, recipe, image, category, price, quentity, email } = req.body;
    try{
        const updatedCart = await Carts.findByIdAndUpdate(
            cartId, {menuItemId, name, recipe, image, category, price, quentity, email}, {
                new: true, runValidators: true,

            }
        )
        if(!updatedCart){
            return res.status(404).json({message: "Cart Item not found"})
        }
        res.status(200).json({message:error.message});
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

//get single recipe
const getSingleCart = async(req, res) =>{
    const cartId = req.params.id;
    try{
        const cartItems = await Carts.findById(cartId)
        res.status(200).json(cartItems)
    }catch (error){
        res.status(500).json({message: error.message})
    }
}
module.exports ={
    getCartByEmail,
    addToCart,
    deleteCart,
    updateCart,
    getSingleCart
}