import express from 'express'
const router = express.Router()

export default (db = {}) => {
  router.get('/users', (req, res) => {
    res.status(200).json([1, 2, 3, 4, 5])
  })

  return router
}
