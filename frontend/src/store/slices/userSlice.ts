import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoggedUserI } from "../../interfaces/logged-user.interface";

const userSlice = createSlice({
   name: "user",
   initialState: null as LoggedUserI | null,
   reducers: {
      setUser: (_state, action: PayloadAction<LoggedUserI>) => {
         return action.payload;
      },
      clearUser: () => null,
   },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
