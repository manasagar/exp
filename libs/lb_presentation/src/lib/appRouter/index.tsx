import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { app_store } from '../../../../lb_data-api/src/index';
import { CommonRouter, Route, Routes } from './router-utils';
// import { Login } from '../login/loginContainer';
import { AppRouterProps } from './index.d';
// import { Auth0Provider } from '@auth0/auth0-react';




export const AppRouter: React.FC<AppRouterProps> = ({ components }) => {

  return (
    <Provider store={app_store}>
      <CommonRouter>
   
      </CommonRouter>
    </Provider>
  );
};

export * from './router-utils';
