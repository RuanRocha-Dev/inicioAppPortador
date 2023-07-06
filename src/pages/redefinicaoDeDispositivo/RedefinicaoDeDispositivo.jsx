import style from './RedefinicaoDeDispositivo.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderAntesLogar } from '../../components/headerAntesLogar/HeaderAntesLogar';
import { BtnSubmitForm } from '../../components/botoes/btnSubmitForm/BtnSubmitForm';
import { Player } from '@lottiefiles/react-lottie-player';
import { InputEmail } from '../../components/inputs/inputEmail/InputEmail'; 
import { Modal } from '../../utils/modal/Modal';

export function RedefinicaoDeDispositivo () {
    let [abreModal, setAbreModal] = useState(false);
    let [disabled, setdisabled] = useState(true);

    const navigateTo = useNavigate(); 


    function validaTipoEmail (el) { 
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(el) {
            const btn = document.querySelector('input[type="button"');
            if(regex.test(el.target.value)) {
                setdisabled(false);
                return false;
            } else {
                setdisabled(true);
                return false;
            }
        }
    }

    function validaEmailRedefinicao () {
        const emailFake = 'pcfmachado@gmail.com';
        const inputEmail = document.querySelector('input[type="email"');

        if(inputEmail.value != emailFake) {
            setAbreModal(true);
            return false;
        } else {
            navigateTo('/envioEmailRedefinicaoDispositivo');
        }
    }

    return (
        <>
            <HeaderAntesLogar textHeader="REDEFINIÇÃO DE DISPOSITIVO" />
            <div className={style.container}>
                <Player 
                    src="https://assets1.lottiefiles.com/packages/lf20_1idqu1ac.json"  
                    background="transparent"  
                    speed="1"  
                    style={{width: '85%'}} 
                    loop  
                    autoplay>
                </Player>
                <h4> Ops... <br/> verificamos que está acessando com um novo dispositivo. Precisamos confirmar seu e-mail de cadastro  </h4>
                <h4> Informe o  e-mail abaixo, assim você receberá as instruções para prosseguir. </h4>
                <InputEmail functionOnchange={(el) => validaTipoEmail(el)} />
                <BtnSubmitForm disabled={disabled} tituloBtn="CONFIRMAR" functionOnclick={() => validaEmailRedefinicao()} />
            </div>

            {abreModal && (
                <Modal
                    conteudoModal={'Email incorreto'}
                    textoBtn="Ok"
                    funcaoClickBtn={setAbreModal}
                />
            )}
        </>
    )
}