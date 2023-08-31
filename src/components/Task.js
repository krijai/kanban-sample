import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Task(props) {
  const { id, index, title, description } = props;
  let style = {
    backgroundColor: "red"
  };

  return (
    <Draggable draggableId={id} index={index} type="TASK">
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task-container"
        >
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
