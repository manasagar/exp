// scoreReducer.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScoreState {
  userXP: number;
}

const initialState: ScoreState = {
  userXP: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setUserXP(state, action: PayloadAction<number>) {
      state.userXP = action.payload;
    },
  },
});

export const { setUserXP } = scoreSlice.actions;
export default scoreSlice.reducer;
