const express = require('express'); //create an express app
const app = express();
const port = 5000;

app.use(express.json());//this needs to above the routes that will use req.body

require('dotenv').config();
const Project = require('./Project');
const Blog=require('./blog');

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
//create an endpoint for creating a project
app.post('/projects',async(req,res)=>{
    
    console.log(req.body);
    //res.send('creating a new project');

    const project= new Project(req.body);
    try{
        const newProject = await project.save();
        res.status(201).json(newProject);
    }catch(err){
        res.status(400).json({message: err.message});
    }
});

//create the endpoints for updating the project by id
app.patch('/projects/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if(project){
        project.set(req.body);
        const updatedProject = await project.save();
        res.json(updatedProject);
        }else{
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//delete the project by id
app.delete('/projects/:id', async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if(project){
            res.json({message: 'Project deleted successfully'});
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/blogs', async (req, res) => {
    try {
        const blog = await Blog.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});// runs the app



