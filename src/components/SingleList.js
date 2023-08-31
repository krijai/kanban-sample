import React from 'react'
import { Draggable } from "react-beautiful-dnd"

export default function SingleList({ id, children }) {
    return (
        <Draggable draggableId={id}>
            {
                (provided) => {
                    return <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>{children}</div>
                }
            }

        </Draggable>
    )
}
