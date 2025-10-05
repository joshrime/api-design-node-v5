import { Router } from 'express'

const router = Router()

// Habit-specific routes

router.get('/', (req, res) => {
  res.json({ message: 'Get all habits' })
})

router.get('/:id', (req, res) => {
  res.json({ message: `Got habit ${req.params.id}` })
})

router.post('/', (req, res) => {
  res.json({ message: 'Created habit.' })
})

router.delete('/:id', (req, res) => {
  res.json({ message: `Habit: ${req.params.id} deleted` })
})

router.post('/:id/complete', (req,res) => [
  res.json({message: 'Completed'})
])

export default router
