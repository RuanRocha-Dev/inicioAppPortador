import { useState } from 'react';

import { InputCpf } from "../../../components/inputs/inputCpf/InputCpf";
import { InputSenhaComplexa } from '../../../components/inputs/inputSenhaComplexa/InputSenhaComplexa';
import { BtnSubmitForm } from '../../../components/botoes/btnSubmitForm/BtnSubmitForm';

import style from './LoginApp.module.css';

export function LoginApp () {
    let [cpf, setCpf] = useState('');

    function getValue(el) {
        cpf = el.target.value;
    }


    function verifica () {
        console.log(validarCPF(cpf))
    }

    return (
        <div className={style.containerLogin}>
            <div className={style.containerLogoAndInputs}>
                <div className={style.boxImg}>
                    <img src="https://www.zaztech.com.br/wp-content/uploads/2022/09/Sem-Titulo-1-1.png" />
                </div>
                <div className={style.boxFormLogin}>
                    <InputCpf functionChange={getValue}/>
                    <InputSenhaComplexa />
                    <BtnSubmitForm tituloBtn="LOGAR"/>
                    <BtnSubmitForm tituloBtn="CADASTRE-SE" functionOnclick={verifica} />
                    {/* <Link to="/home"> <input type="button" value="LOGAR" /> </Link> */}
                </div>
            </div>

            <div className={style.boxImgBackground}>
                <img src="https://i0.wp.com/techwek.com/wp-content/uploads/2021/12/fotos-de-papel-de-parede-para-celular-masculino-3d.png?fit=512%2C1024&ssl=1" alt="" />
            </div>
        </div>
    )
}
