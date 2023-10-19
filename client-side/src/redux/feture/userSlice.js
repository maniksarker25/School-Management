/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
        getUser: state => ({
            
        })
	},
});

// Action creators are generated for each case reducer function
export const { getUser } = userSlice.actions;

export default userSlice.reducer;
