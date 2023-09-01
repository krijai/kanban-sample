import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: ""
}

const taskSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        updateTasks: (state, action) => {
            console.log("NewTasklist--------", action.payload)
        },
        getTitle: (state, action) => {
            console.log("action.payload--------", action.payload)
            return {title: "Simple Kanban Board"}
        },
    },
})

export const { updateTasks, getTitle } = taskSlice.actions
export default taskSlice.reducer