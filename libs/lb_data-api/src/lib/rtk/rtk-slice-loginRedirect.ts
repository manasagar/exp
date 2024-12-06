// src/redux/slices/loginRedirectSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginRedirectState {
  loginRedirect: string;
}

const initialState: LoginRedirectState = {
  loginRedirect: '',
};

const loginRedirectSlice = createSlice({
  name: 'loginRedirect',
  initialState,
  reducers: {
    setLoginRedirect: (state, action: PayloadAction<string>) => {
      state.loginRedirect = action.payload;
    },
  },
});

export const { setLoginRedirect } = loginRedirectSlice.actions;
export default loginRedirectSlice.reducer;
