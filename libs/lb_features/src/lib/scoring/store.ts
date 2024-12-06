// store.ts

import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from './reducers/scoreReducer';

const store = configureStore({
  reducer: {
    score: scoreReducer,
    // Add other reducers here if needed
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
