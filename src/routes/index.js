const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req, res) => {
    res.render('index.html', { title: '< Stéfano Gentile />'});

})

module.exports = router;