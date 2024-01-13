const express = require('express')


const {create_user, getAll_users, update_user, delete_user, single_user} = require('../controller/userController')

const router = express.Router();
// post User, C -- for create
router.post('/api/user',create_user)

// post User, R -- for read
router.get('/api/user',getAll_users)


//  post Update, U -- for update
router.patch('/api/user/:id',update_user)

//  post delete, D -- for delete
router.delete('/api/user/:id',delete_user)


// Psot single, S -- for get
router.get('/api/user/:id',single_user)

module.exports = router