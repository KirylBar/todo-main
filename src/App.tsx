import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";

export type FilterButtonNameType = 'All' | 'Active' | 'Completed'

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Vue", isDone: false},
        {id: 5, title: "Angular", isDone: true},
    ])

    const removeTask = (id: number) => {
        setTasks(tasks.filter(el => el.id !== id))
        console.log(`Задача с ID : ${id} - удалена.`)
    }

    return (
        <div className="App">
            <TodoList
                title={"What to learn?"}
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
