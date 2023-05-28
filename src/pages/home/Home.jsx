import style from './Home.module.css';
import { BtnHome } from '../../components/btnHome/BtnHome';

export function Home () {
    return (
        <div className={style.containerItensMenuHome}>
            <BtnHome icone="fa-solid fa-dollar-sign" spanIcone="Fidelidade" />
            <BtnHome icone="fa-solid fa-file-lines" spanIcone="Crédito" />
            <BtnHome icone="fa-solid fa-ticket" spanIcone="Resgates de Prêmeios" />
            <BtnHome icone="fa-solid fa-hand-holding-heart" spanIcone="Clube de Beneficios Zaztech" />
            <BtnHome icone="fa-solid fa-user-check" spanIcone="Convidar" />
            <BtnHome icone="fa-solid fa-wallet" spanIcone="Conta Digital" />
            <BtnHome icone="fa-solid fa-users" spanIcone="Dependentes" />
            <BtnHome icone="fa-solid fa-basket-shopping" spanIcone="Shopping" />
            <BtnHome icone="fa-solid fa-credit-card" spanIcone="Wallet" />
            <BtnHome icone="fa-solid fa-heart" spanIcone="AMO VANTAGENS" />
        </div>
    )
}