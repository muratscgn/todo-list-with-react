import React from 'react'
import { MdDeleteOutline, MdEditNote, MdOutlineCheckCircleOutline } from "react-icons/md"
import { useTodoLayerValue } from '../context/TodoContext'

function Todo({ todo }) {
    return (<>
        <div className='todo-row'>
            <div>
                {todo.content}
            </div>
            <div className='todo-icon'>
                <MdDeleteOutline className='todo-icon'></MdDeleteOutline>
                <MdEditNote className='todo-icon'></MdEditNote>
            </div>
        </div>
    </>)
}

export default Todo