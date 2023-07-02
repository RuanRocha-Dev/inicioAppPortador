import { Outlet, useLocation } from 'react-router-dom';

import './styleGlobal/Global.css';
import style from './App.module.css';
import { MenuBottomHome } from './components/menuBottomHome/MenuBottomHome';
import { SideBar } from './components/sideBar/SideBar';
import { Header } from './components/header/Header';



function App() {
  const location = useLocation();
  
  if(location.pathname == '/' || location.pathname.includes('/sucessoEnvioRedefinicaoSenha')) {
    return (
      <>
        <main className={style.containerOutletTelasLogin}>
          <Outlet />
        </main>
    </>
    )
  } else {
    return (
      <>
          <Header urlImg="https://www.zaztech.com.br/wp-content/uploads/2022/09/Sem-Titulo-1-1.png" />
          <main className={style.containerOutletJaLogado}>
            <Outlet />
          </main>
          <SideBar />
          <MenuBottomHome />
      </>
    )
  }

}

export default App
