const express = require('express'); //create an express app
const app = express();
const port = 5000;


require('dotenv').config();
const Project = require('./Project');

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
app.post('/projects', async (req, res) => {
    try {
        const newprojects = await Project.save();
        res.json(newprojects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/blogs', async (req, res) => {
    try {
        const blogs = await blog.find();
        res.json(blog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});// runs the app



