import express from 'express'
import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser, createUser, getUserByAccountUserId } from '../controllers/user.controller.js'
// import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router()

router.get('/:id', getUser);
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unfollowUser)
router.post('/create-user', createUser)
router.get('/get-by-account-id/:accountUserId', getUserByAccountUserId)
export default router