import { Router } from 'express'

const router = Router()

// User-specific routes

router.get('/', (req, res) => {
  res.json({ message: 'Get all users' })
})

router.get('/:id', (req, res) => {
  res.json({ message: 'Got user' })
})

router.put('/:id', (req, res) => {
  res.json({ message: 'User updated' })
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'User deleted' })
})

export default router
