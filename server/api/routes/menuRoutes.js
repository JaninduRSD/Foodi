const express = require('express');
const router = express.Router();



//get all menu items
router.get('/', async (req, res) =>{
    try{
        const menus = await Menu.find({});
        res.status(200).json(menus);
    }catch (error){
        res.status(500).jason({ message: error.message });
    }
}
)

module.exports = router;
