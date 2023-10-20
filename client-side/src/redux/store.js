/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./feture/userSlice";

export const store = configureStore({
    reducer: {
        userSlice: userSlice,
    },
});
