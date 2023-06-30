import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './pages/home/Home.jsx';
import { CartaoVirtual } from './pages/cartaoVirtual/CartaoVirtual';
import { Carteira } from './pages/carteira/Carteira';
import { LoginApp } from './pages/login/loginApp/LoginApp.jsx';
import { SucessoEnvioRedefinicaoSenha } from './pages/sucessoEnvioRedefinicaoSenha/sucessoEnvioRedefinicaoSenha.jsx';

const routers = createBrowserRouter([
  { path: '/', 
    element: <App />,
    children: [
      { path: '/', element: <LoginApp /> },
      { path: '/home', element: <Home /> },
      { path: '/cartao-virtual', element: <CartaoVirtual /> },
      { path: '/carteira', element: <Carteira /> },
      { path: '/sucessoEnvioRedefinicaoSenha', element: <SucessoEnvioRedefinicaoSenha /> },
    ] 
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>,
)
