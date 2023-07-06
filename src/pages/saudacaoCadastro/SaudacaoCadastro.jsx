import style from './SaudacaoCadastro.module.css';

import { useNavigate } from 'react-router-dom';

import { HeaderAntesLogar } from '../../components/headerAntesLogar/HeaderAntesLogar';
import { Player } from '@lottiefiles/react-lottie-player';
import { BtnSubmitForm } from '../../components/botoes/btnSubmitForm/BtnSubmitForm';

export function SaudacaoCadastro () {
    const navigateTo = useNavigate();

    return (
        <>
            <HeaderAntesLogar textHeader="CADASTRO COMPLETO" />
            <div className={style.container}>
                <Player 
                    src="https://assets4.lottiefiles.com/packages/lf20_9NvLx6CkT3.json"  
                    background="transparent"  
                    speed="1"  
                    style={{width: '95%'}} 
                    loop  
                    autoplay>
                </Player>
                <h2> Parabéns, você foi cadastrado! </h2>
                <h4> Clique no botão abaixo para acessar o aplicativo.  </h4>
                <BtnSubmitForm tituloBtn="ACESSAR" functionOnclick={() => navigateTo('/')} />
            </div>
        </>
    )
}