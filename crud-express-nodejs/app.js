const { error, Console } = require('console');
const { randomUUID } = require('crypto');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

let tasks = []

app.use(express.json());

app.get('/', (req, res) => {
    res.send('/')
})

// File System
fs.readFile('data/tasks.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        tasks = JSON.parse(data)
    }
})

// CREATE tasks
app.post('/tasks', (req, res) => {
    const { name, duration } = req.body

    const task = {
        id: randomUUID(),
        name: name,
        duration: duration,
    }

    tasks.push(task)

    taskFile()

    res.send(task)
})

// READ tasks
app.get('/tasks', (req, res) => {
    res.send(tasks)
})

// READ ONE task
app.get('/tasks/:id', (req, res) => {
    const {id} = req.params

    const task = tasks.find((task) => task.id === id)

    res.send(task)
})

// UPDATE ONE task
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params
    const { name, duration } = req.body

    const taskIndex = tasks.findIndex((task) => task.id === id )

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        name,
        duration,
    }

    taskFile()
    
    res.send(tasks[taskIndex])
})

// DELETE task
app.delete('/tasks/:id', (req, res) => {
    const {id} = req.params

    const taskIndex = tasks.findIndex((task) => task.id === id)

    tasks.splice(taskIndex, 1)

    taskFile()

    res.send({ message: 'Task Removed'})
})

const taskFile = () => {
    fs.writeFile('data/tasks.json', JSON.stringify(tasks), (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Task Inserted')
        }
    })
}

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});