import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    userData: {},
    userAppointments: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setUserAppointments: (state, action) => {
            state.userAppointments = Array.isArray(action.payload) ? action.payload : [];
        }
    }
})

export const {setUserData, setUserAppointments} = userSlice.actions