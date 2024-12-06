/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rtkSliceLoginRedirect from './rtk-slice-loginRedirect';
import rtkSliceBuddyMessage from './rtk-slice-buddyMessage';
import { makeApi } from './rtk-api';

// Define the Reducers that will always be present in the application
const staticReducers = {
  [makeApi.reducerPath]: makeApi.reducer,
  loginRedirect: rtkSliceLoginRedirect, 
  buddyMessage: rtkSliceBuddyMessage,
};

function configureAppStore() {
  const store: any = configureStore({
    reducer: { ...staticReducers },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(makeApi.middleware),
  });

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key: string | number, asyncReducer: any) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // Return the modified store
  return store;
}

export const app_store: any = configureAppStore();

function createReducer(asyncReducers: any) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export type RootState = ReturnType<typeof app_store.getState>;
export type AppDispatch = typeof app_store.dispatch;
