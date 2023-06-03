import React from 'react';
import { useNavigate } from 'react-router-dom';

import { InputCpf } from "../../../components/inputs/inputCpf/InputCpf";
import { InputSenhaComplexa } from '../../../components/inputs/inputSenhaComplexa/InputSenhaComplexa';
import { BtnSubmitForm } from '../../../components/botoes/btnSubmitForm/BtnSubmitForm';

import style from './LoginApp.module.css';

export function LoginApp () {
    const navigateTo = useNavigate();
    let cpf = '';
    let senha = '';

    function getValueCpf (el) {
        cpf = el.target.value;
    }
    
    function getValueSenha (el) {
        senha = el.target.value;
    }

    function verifica (el) {
        let btn = el.target;
        const cfpLogin = '10186444907';
        const senhaLogin = '#Oloko123';

        if(cpf == cfpLogin && senha == senhaLogin ) {
            navigateTo('/home');
        } else {
            btn.style.border = '2px solid red';
            btn.disabled = 'disabled';
            
            setTimeout(() => {
                btn.style.border = '';
                btn.disabled = '';
            }, 2000);
        }
        
    }

    return (
        <div className={style.containerLogin}>
            <div className={style.containerLogoAndInputs}>
                <div className={style.boxImg}>
                    <img src="https://www.zaztech.com.br/wp-content/uploads/2022/09/Sem-Titulo-1-1.png" />
                </div>
                <div className={style.boxFormLogin}>
                    <InputCpf functionChange={getValueCpf}/>
                    <InputSenhaComplexa functionChange={getValueSenha} />
                    <BtnSubmitForm tituloBtn="LOGAR" functionOnclick={verifica} />
                    <BtnSubmitForm tituloBtn="CADASTRE-SE" />
                </div>
            </div>
            <div className={style.boxImgBackground}>
                <img src="https://i.pinimg.com/236x/da/9a/56/da9a5680ca2741b1c06817b7ed785f1f.jpg" alt="" />
            </div>


        </div>
    )
}
