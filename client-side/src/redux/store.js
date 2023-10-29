/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./feture/userSlice";
import eventsSlice from "./feture/eventsSlice";

export const store = configureStore({
	reducer: {
		userSlice: userSlice,
		eventsSlice,
	},
});
