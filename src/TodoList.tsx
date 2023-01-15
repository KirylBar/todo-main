import {FilterButtonNameType} from "./App";
import {useState} from "react";

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropType = {
    title: string,
    tasks: TaskType[],
    removeTask: (id: number) => void
}

export const TodoList = (props: PropType) => {

    const [filterButtonName, setFilterButtonName] = useState<FilterButtonNameType>('All')

    let durshlag = props.tasks

    if (filterButtonName === 'Active') {
        durshlag = props.tasks.filter(el => el.isDone)
    } else if (filterButtonName === 'Completed') {
        durshlag = props.tasks.filter(el => !el.isDone)
    }

    const filterCurrentTasks = (buttonName: FilterButtonNameType) => {
        setFilterButtonName(buttonName)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {durshlag.map((el) => {
                    return (
                        <li key={el.id}>
                            <button onClick={() => props.removeTask(el.id)}>X</button>
                            <input type={'checkbox'} defaultChecked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => filterCurrentTasks('All')}>All</button>
                <button onClick={() => filterCurrentTasks('Active')}>Active</button>
                <button onClick={() => filterCurrentTasks('Completed')}>Completed</button>
            </div>
        </div>
    )
}