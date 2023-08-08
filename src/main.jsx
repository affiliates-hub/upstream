import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes.jsx';
import Provider from './private/provider/Provider';
import DataProvider from './private/provider/DataProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </Provider>
  </React.StrictMode>,
)
