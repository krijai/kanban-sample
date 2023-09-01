import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { DragDropContext } from "react-beautiful-dnd"
import Column from "./components/Column";
import { useState, useEffect } from 'react';
import { updateTasks, getTitle } from "./taskSlice"
function App() {
  const { title } = useSelector(state => state)
  const dispatch = useDispatch()


  let initialState = [
    {
      groupName: "Active List",
      tasks: [{ id: "1", title: "Task-1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, { id: "2", title: "Task-2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }]
    },
    {
      groupName: "Completed List",
      tasks: [{ id: "3", title: "Task-3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }, { id: "4", title: "Task-4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }]
    }
  ];

  const [taskList, setTasks] = useState(initialState);
  console.log("taskList-----", taskList)

  useEffect(() => {
    dispatch(getTitle())
  },[])

  function onDragEnd(val) {
    const { draggableId, source, destination } = val;

    const [sourceGroup] = taskList?.filter(
      column => column.groupName === source.droppableId
    );

    console.log("sourceGroup------", sourceGroup)

    // Destination might be `null`: when a task is
    // dropped outside any drop area. In this case the
    // task reamins in the same column so `destination` is same as `source`
    const [destinationGroup] = destination
      ? taskList?.filter(column => column.groupName === destination.droppableId)
      : { ...sourceGroup };

    // We save the task we are moving
    const [movingTask] = sourceGroup?.tasks.filter(t => t.id === draggableId);

    const newSourceGroupTasks = sourceGroup?.tasks.splice(source.index, 1);
    const newDestinationGroupTasks = destinationGroup?.tasks.splice(
      destination.index,
      0,
      movingTask
    );

    // Mapping over the task lists means that you can easily
    // add new columns
    const newTaskList = taskList.map(column => {
      if (column.groupName === source.groupName) {
        return {
          groupName: column.groupName,
          tasks: newSourceGroupTasks
        };
      }
      if (column.groupName === destination.groupName) {
        return {
          groupName: column.groupName,
          tasks: newDestinationGroupTasks
        };
      }
      return column;
    });
    setTasks(newTaskList);
    dispatch(updateTasks(newTaskList))
  }
  console.log("title----------", title)
  return (
    <DragDropContext onDragEnd={onDragEnd} className="container">
      <h1 className='heading'>{title}</h1>
      <div className="wrapper">
        <Column
          className="column"
          droppableId="Active List"
          list={taskList[0].tasks}
          type="TASK"
        />
        <Column
          className="column"
          droppableId="Completed List"
          list={taskList[1].tasks}
          type="TASK"
        />
      </div>
    </DragDropContext>
  );
}

export default App;
