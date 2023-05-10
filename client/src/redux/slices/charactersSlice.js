import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        allCharacters: (state, action) =>{
            state.data = action.payload
        }
    }
})

export const { allCharacters } = charactersSlice.actions;

export default charactersSlice.reducer