import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Droppable, Draggable } from "react-beautiful-dnd"
import SingleList from './SingleList'
export default function Layout() {
    const { taskList, completedTaskList } = useSelector(state => state)
    const dispatch = useDispatch()
    console.log("Layout taskList", taskList)
    return (
        <div class="container">
            <Droppable droppableId='TodosList'>
                {
                    (provided) => {
                        return (<div class="todos" ref={provided.innerRef} {...provided.droppableProps}>
                            <span class="todos__heading">Active Tasks</span>
                            {taskList.map((task, index) => {
                                return (<Draggable draggableId={task.id}>{(provided) => {return <p ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>{task.content}</p>}}</Draggable>)
                            })}
                        </div>)
                    }
                }
            </Droppable>
            <Droppable droppableId='TodosRemove'>
                {
                    (provided) => {
                        return (<div class="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
                            <span class="todos__heading">Completed Tasks</span>
                            {completedTaskList.map((task, index) => {
                                return (<Draggable draggableId={task.id}>{(provided) => {return <p ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>{task.content}</p>}}</Draggable>)
                            })}
                        </div>)
                    }
                }
            </Droppable>

        </div>
    )
}
