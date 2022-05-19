import React from 'react';
import { useState } from 'react'
import styles from "./todo.module.css"

const Todos = () => {
    const [newvalue, setValue] = useState("")
    const [todos, setTodos] = useState([]);


    // const handleChange = (e) => {
    //     console.log(e);

    // }
    return (
        <div>
            <div>
                {todos.map((todos) =>
                (
                    <div className={styles.todo} key={todos.id}>
                         <div>{todos.value}</div>
                        <input className={styles.input1} type="checkbox" />
                    </div>
                ))}
            </div>
            <div className={styles.input}>
                <input  value={newvalue} onChange={(e) => setValue(e.target.value)} placeholder='  Write Something' />
                <button onClick={() => {
                    setTodos([...todos, {
                        id: Date.now(),
                        value: newvalue,
                        isComleted: false,
                    }]);
                    setValue("");
                }}>+</button>
            </div>

        </div>
    )
}

export default Todos;
