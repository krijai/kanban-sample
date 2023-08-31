import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

function Column(props) {
  const { droppableId, list, type } = props;

  let style = {
    backgroundColor: "orange",
    height: "300px",
    width: "400px",
    margin: "100px"
  };

  console.log("type = ", droppableId, list.map(v => v.id));

  return (
    <Droppable droppableId={droppableId} type={type}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} className="column-container">
          <h2>{droppableId}</h2>

          {list.map((val, index) => {
            return (
              <Task id={val.id} key={val.id} index={index} title={val.title} description={val.description}/>
            );
          })}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Column;
