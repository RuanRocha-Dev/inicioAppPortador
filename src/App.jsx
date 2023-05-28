import { Outlet } from 'react-router-dom';

import './styleGlobal/Global.css';
import style from './App.module.css';
import { MenuBottomHome } from './components/menuBottomHome/MenuBottomHome';
import { SideBar } from './components/sideBar/SideBar';
import { Header } from './components/header/Header';

function App() {
  return (
    <>
      <Header urlImg="https://www.zaztech.com.br/wp-content/uploads/2022/09/Sem-Titulo-1-1.png"/>
      <main className={style.containerOutlet}>
        <Outlet />
      </main>
      <SideBar />
      <MenuBottomHome />
    </>
  )
}

export default App
