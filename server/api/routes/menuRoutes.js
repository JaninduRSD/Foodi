const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");



//get all menu items
router.get('/', async (req, res) =>{
    try{
        const menu = await Menu.find({});
        res.status(200).json(menu);
    }catch (error){
        res.status(500).json({ message: error.message });
    }
}
)

module.exports = router;
