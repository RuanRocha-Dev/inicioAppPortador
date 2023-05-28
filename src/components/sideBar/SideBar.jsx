import style from './SideBar.module.css';
import { ItensMenuSideBar } from '../itensMenuSideBar/ItensMenuSideBar'

export function SideBar () {
    return (
        <div className={style.containerSideBar} id='sideBar'>
            <div className={style.infosUser}>
                <img src="https://pensarpiaui.com/media/image_bank/2020/10/john-lennon.jpg.750x0_q95_crop.jpg" alt="Imagem de perfil do usúario" />
                <p> Jhon Lennon </p>
            </div>
            <ul>
                <ItensMenuSideBar nomeMenu="Perfil" nomeICone="fa-solid fa-user" />
                <ItensMenuSideBar nomeMenu="Notificações" nomeICone="fa-solid fa-bell" />
                <ItensMenuSideBar nomeMenu="Termos" nomeICone="fa-solid fa-file" />
                <ItensMenuSideBar nomeMenu="Nosso Whatsapp" nomeICone="fa-brands fa-whatsapp" />
                <ItensMenuSideBar nomeMenu="Sair do Aplicativo" nomeICone="fa-solid fa-arrow-right-from-bracket" />
            </ul>
            <footer>
                <i className='fa-solid fa-rotate'></i>
                <span> 
                    Gire o celular para ver seu cartão virtual. <br/> 
                    Verifique se a permissão para girar a tela esta liberada no seu celular
                </span>
            </footer>
        </div>
    ) 
}