import style from './EnvioEmailRedefinicaoDispositivo.module.css';

import { useNavigate } from 'react-router-dom';

import { HeaderAntesLogar } from '../../components/headerAntesLogar/HeaderAntesLogar';
import { Player } from '@lottiefiles/react-lottie-player';
import { BtnSubmitForm } from '../../components/botoes/btnSubmitForm/BtnSubmitForm';

export function EnvioEmailRedefinicaoDispositivo () {
    const navigateTo = useNavigate(); 

    return (
        <>
            <HeaderAntesLogar textHeader="REDEFINIÇÃO DE DISPOSITIVO" />
            <div className={style.container}>
                <Player 
                    src="https://assets4.lottiefiles.com/packages/lf20_kmcsf9w2.json"  
                    background="transparent"  
                    speed="1"  
                    style={{width: '85%'}} 
                    loop  
                    autoplay>
                </Player>
                <h3> Certo! Enviamos para seu e-mail as instruções para acessar com um novo dispositivo.  </h3>
                <BtnSubmitForm tituloBtn="INICIO" functionOnclick={() => navigateTo('/')} />
            </div>
        </>
    )
}