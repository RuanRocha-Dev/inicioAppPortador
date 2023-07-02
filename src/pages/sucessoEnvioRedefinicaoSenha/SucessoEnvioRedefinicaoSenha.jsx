import style from './SucessoEnvioRedefinicaoSenha.module.css';

import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate, useLocation } from 'react-router-dom';
import { BtnSubmitForm } from '../../components/botoes/btnSubmitForm/BtnSubmitForm';
import { HeaderAntesLogar } from '../../components/headerAntesLogar/HeaderAntesLogar';

export function SucessoEnvioRedefinicaoSenha () {
    const navigateTo = useNavigate(); 

    const location = useLocation();
    const searchStatus = new URLSearchParams(location.search).get('status');

    if(searchStatus == null) {
        return (
            <>
                <HeaderAntesLogar textHeader="EMAIL ENVIADO" />
                <div className={style.container}>
                    <Player 
                        src="https://assets2.lottiefiles.com/private_files/lf30_o0calpsv.json"  
                        background="transparent"  
                        speed="1"  
                        style={{width: '100%'}}   
                        autoplay>
                    </Player>
                    <h3> Certo! Enviamos para o e-mail ru*****ki@gmail.com as informações para redefinir sua senha. </h3>
                    <BtnSubmitForm tituloBtn="INICIO" functionOnclick={() => navigateTo('/')} />
                </div>
            </>
        )
    } else {
        return (
            <>
                <HeaderAntesLogar textHeader="FALHA AO ENVIAR EMAIL" />
                <div className={style.container}>
                    <Player 
                        src="https://assets8.lottiefiles.com/packages/lf20_0pgmwzt3.json"  
                        background="transparent"  
                        speed="1"  
                        style={{width: '100%'}} 
                        loop  
                        autoplay>
                    </Player>
                    <h3> Erro ao enviar e-mail de redefinição de senha, tente Novamente, se o erro persistir entre em contato com o suporte. </h3>
                    <BtnSubmitForm tituloBtn="INICIO" functionOnclick={() => navigateTo('/')} />
                </div>
            </>
        )
    }
}