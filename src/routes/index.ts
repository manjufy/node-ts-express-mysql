import express from 'express'
const router = express.Router()

import userController from './users/controller'

router.use(userController())

export default router