import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Components/UserSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
