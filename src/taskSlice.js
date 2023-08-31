import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskList: [{id: '1x', content: 'Task1'}],
    completedTaskList: [{id: '2x', content: 'Task2'}]
}

const taskSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log("action.payload--------", action.payload)
        },
    },
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer