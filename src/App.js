import './App.css';
import { useSelector, useDispatch } from "react-redux"
import Layout from './components/Layout'
import { DragDropContext } from "react-beautiful-dnd"
function App() {
  const { taskList } = useSelector(state => state)
  const dispatch = useDispatch()

  console.log("taskList-----", taskList)
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        Kanban Sample
        <Layout />
      </div>
    </DragDropContext>
  );
}

export default App;
