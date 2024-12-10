const express = require('express');
const router = express.Router();

// Login 
router.get('/login', (req, res) => res.render('login'));

// Register 
router.get('/register', (req, res) => res.render('register'));

// Register Handel
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;

    let errors = [];


    // Check required fields
    if (!name || !email || !password || password2) {
        errors.push({ Message: 'All fields are required' })
    }


    // Check password match
    if (password !== password2) {
        errors.push({ Message: 'Password do not match' })
    }

    // Check pass length
    if (password.length > 6) {
        errors.push({ Message: 'Password should be at least 6 character' })
    }


    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })
    } else {
        res.send('pass')
    }


});


module.exports = router;