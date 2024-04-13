import express from 'express';
import { createUser, getUser, getUsersFromID, updateUser, deleteUser } from '../controllers/users';

const router = express.Router();

let users = []
// all routes start with /users
router.get('/', getUser);

// ../controllers/users is where this function is 
router.post('/', createUser)

// /users/2 returns the user
router.get("/:id", getUsersFromID)

// you can use patch if you want to only update certain fields not all which the put field does
// you can essentially just change router.put to router.patch if you want to and remove the user.id = id field 
router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router;