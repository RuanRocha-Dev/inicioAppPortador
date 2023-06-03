import style from './MenuBottomHome.module.css';
import { ItensMenuBottomHome } from './itensMenuBottomHome/ItensMenuBottomHome';
// import { SideBar } from '../sideBar/SideBar';

export function MenuBottomHome () {
    const styleBtnQrCode = {
        backgroundColor: 'var(--corSecundaria)',
        justifyContent: 'center',
        marginBottom: '25px'
    }
    
    const styleCorIconeAndLabel = {
        color: 'var(--corPrimaria)',
        fontSize: '1.7em'
    }

    function abresideBar () {
        const side = document.querySelector('#sideBar');
        if(side.style.right == '0%') {
            side.style.right = '';
        } else {
            side.style.right = '0%';
        }
    }

    return (
        <footer className={style.containerMenuFooter }>
            <ItensMenuBottomHome textSpan="Inicio" nameIcon="fa-solid fa-house" toLink='/home' />
            <ItensMenuBottomHome textSpan="C.Virtual" nameIcon="fa-solid fa-credit-card" toLink='/cartao-virtual' />
            <ItensMenuBottomHome textSpan="" nameIcon="fa-solid fa-qrcode" estilo={styleBtnQrCode} estiloIconAndLabel={styleCorIconeAndLabel}  />
            <ItensMenuBottomHome textSpan="Carteira" nameIcon="fa-solid fa-wallet" toLink='/carteira' />
            <ItensMenuBottomHome textSpan="Menu" nameIcon="fa-solid fa-bars" funtionCallBack={abresideBar} />
        </footer>
    )
}