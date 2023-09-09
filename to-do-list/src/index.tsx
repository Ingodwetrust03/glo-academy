import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider} from "react-router-dom";
import {router} from "./router";
import { store } from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './styles/GlobalStyle'
import { NormalizeStyle } from './styles/Normalize'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <NormalizeStyle />
          <GlobalStyle />
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);

