import { Router } from 'express'

const router = Router()

// Authentication Routes
router.post('/register', (req, res) => {
  res.status(201).json({ message: 'User registered.' })
})

router.post('/login', (req, res) => {
  res.status(201).json({ message: 'User logged in.' })
})

router.post('/logout', (req, res) => {
  res.status(201).json({ message: 'User logged out.' })
})

export default router
