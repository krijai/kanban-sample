import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskList: [{
        groupName: "Active List",
        tasks: [{ id: "1", title: "Task-1" }, { id: "2", title: "Task-2" }]
      },
      {
        groupName: "Completed List",
        tasks: [{ id: "3", title: "Task-3" }, { id: "4", title: "Task-4" }]
      }],
}

const taskSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        updateTasks: (state, action) => {
            console.log("action.payload--------", action.payload)
        },
    },
})

export const { updateTasks } = taskSlice.actions
export default taskSlice.reducer