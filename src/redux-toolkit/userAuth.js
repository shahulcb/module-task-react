import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isAuthenticated: false,
}

const userAuthSlice = createSlice({
    name: "userAuthSlice",
    initialState,
    reducers: {
        userAuthSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        userLogut: (state) => {
            state.isAuthenticated = false
            state.user = null
        }
    }
})

export const { userAuthSuccess, userLogut } = userAuthSlice.actions
export default userAuthSlice.reducer 