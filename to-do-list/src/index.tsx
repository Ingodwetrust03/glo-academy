import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.scss';
import {ToDoListPage} from './pages/ToDoListPage';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {NotFound} from "./pages/404";
import {ItemDescription} from "./pages/ItemDescription";
import {Layout} from "./layouts/Layout";

const todos = [
    {
        id: 0,
        text: "Первая задача",
        isDone: false
    },
    {
        id: 1,
        text: "Вторая задача",
        isDone: true
    },
    {
        id: 2,
        text: "Третья задача",
        isDone: true
    }
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <HomePage todos={todos}/>
            },
            {
                path: '/todo',
                element: <ToDoListPage />
            },
            {
                path: '/list/:id',
                element: <ItemDescription todos={todos}/>
            }
        ],
    },
    {
        path: '*',
        element: <NotFound />
    }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

