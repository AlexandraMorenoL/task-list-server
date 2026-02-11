const express = require('express');
const app = express();

const tasks = [
    { 
        "id": 123456, 
        "isCompleted": false,
        "description": "Walk the dog" 
    },
     {  "id": 654321, 
        "isCompleted": true,
        "description": "Buy groceries"
     },
     {  "id": 789012,
        "isCompleted": false,
        "description": "Do homework"
     }
]

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 