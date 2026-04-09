const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
app.use(express.json());

const PORT = 3000;

/* ---------------- DATABASE CONNECTION ---------------- */

mongoose.connect('mongodb://127.0.0.1:27017/lab12DB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/* ---------------- CREATE ---------------- */

app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* ---------------- READ ---------------- */

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* ---------------- UPDATE ---------------- */

app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* ---------------- DELETE ---------------- */

app.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* ---------------- SERVER ---------------- */

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});