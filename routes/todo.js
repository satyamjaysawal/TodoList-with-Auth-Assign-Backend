const express = require('express');
const Todo = require('../models/Todo');
const auth = require('../middleware/auth');
const router = express.Router();

// Create a Todo
router.post('/', auth, async (req, res) => {
    const { title } = req.body;

    const todo = new Todo({ title, userId: req.user.id });
    await todo.save();
    res.status(201).json(todo);
});

// Get all Todos
router.get('/', auth, async (req, res) => {
    const todos = await Todo.find({ userId: req.user.id });
    res.json(todos);
});

// Update a Todo
router.put('/:id', auth, async (req, res) => {
    const { title, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        { title, completed },
        { new: true }
    );
    res.json(updatedTodo);
});

// Edit a todo
router.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    
    try {
        const todo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true });
        if (!todo) {
            return res.status(404).send('Todo not found');
        }
        res.send(todo);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});



// Delete a Todo
router.delete('/:id', auth, async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
});



module.exports = router;
