import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScoringState {
  userXP: number;
}

const initialState: ScoringState = {
  userXP: 0,
};

const scoringSlice = createSlice({
  name: 'scoring',
  initialState,
  reducers: {
    updateXP: (state, action: PayloadAction<number>) => {
      state.userXP += action.payload;
    },
  },
});

export const { updateXP } = scoringSlice.actions;
export default scoringSlice.reducer;
