import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BuddyMessageState {
  message: string;
}

const initialState: BuddyMessageState = {
  message: '',
};

const buddyMessageSlice = createSlice({
  name: 'buddyMessage',
  initialState,
  reducers: {
    setFindBuddyMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setFindBuddyMessage } = buddyMessageSlice.actions;
export default buddyMessageSlice.reducer;
