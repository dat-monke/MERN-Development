const express = require('express');
const router = express.Router(); 

// Item Model 
const Item = require('../../models/Item'); 

// @route GET api/items
// @desc Get All Items 
// @access Public 
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

// In a browser a GET request is pulling, a POST request is to insert something/send something out 

// @route POST api/items
// @desc Create a Post
// @access Public 
router.post('/', (req, res) => {
    // Basically here I am creating a new item 
    const newItem = new Item({
        name: req.body.name
    }); 
    // This is where I actuallly save the item to the DB since previously it was only in memory 
    newItem.save().then(item => res.json(item)); 
});

// @route Delete api/items/:id
// @desc Delete an Item
// @access Public 
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;