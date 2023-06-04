const { getAll, getOne, create, remove, update } = require('../controllers/user.cotrollers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
		.post(create)

userRouter.route("/:id")		
    	.get(getOne)
    	.delete(remove)
		.put(update)

module.exports = userRouter;