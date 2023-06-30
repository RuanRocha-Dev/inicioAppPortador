import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { InputCpf } from "../../../components/inputs/inputCpf/InputCpf";
import { InputSenhaComplexa } from '../../../components/inputs/inputSenhaComplexa/InputSenhaComplexa';
import { BtnSubmitForm } from '../../../components/botoes/btnSubmitForm/BtnSubmitForm';
import { Modal } from '../../../utils/modal/Modal';

import { soNumeros } from '../../../funcoesGlobais/FuncoesGlobais';

import style from './LoginApp.module.css';

export function LoginApp () {
    const navigateTo = useNavigate();
    let [conteudoModal, setconteudoModal] = useState('');
    let [abreModal, setAbreModal] = useState(false);

    function verificaLogin () {
        const cfpLogin = '10186444907';
        const senhaLogin = '#Oloko123';

        const cpfField = soNumeros(document.querySelector('#cpfField').value);
        const senhaField = document.querySelector('#senhaField').value;

        if (cpfField == '' && senhaField == '') {
            conteudoModal = 'Prencha os campos CPF e SENHA';
            setconteudoModal(conteudoModal);
            setAbreModal(true);
            return false;
        }
        
        if(cpfField == '') {
            conteudoModal = 'Prencha o campo CPF';
            setconteudoModal(conteudoModal);
            setAbreModal(true);
            return false;
        } 
        if ( senhaField == '' ) {
            conteudoModal = 'Prencha o campo SENHA';
            setconteudoModal(conteudoModal);
            setAbreModal(true);
            return false;
        }
        
        if(cpfField == cfpLogin && senhaField == senhaLogin ) {
            navigateTo('/home');
            return false;
        } else {
            conteudoModal = 'Usuário ou senha incorretos';
            setconteudoModal(conteudoModal);
            setAbreModal(true);
            return false;
        }
    }

    function abreModalRecuperacaoSenha () {
        conteudoModal = `Você receberá um e-mail com as instruções para trocar de senha. \n\n Toque no botão abaixo para confirmar.`;
        setconteudoModal(conteudoModal);
        setAbreModal(true);
        return false;
    }

    function vai () {
        navigateTo('/sucessoEnvioRedefinicaoSenha');
    }

    return (
        <div className={style.containerLogin}>
            <div className={style.containerLogoAndInputs}>
                <div className={style.boxImg}>
                    <img src="https://www.zaztech.com.br/wp-content/uploads/2022/09/Sem-Titulo-1-1.png" />
                </div>
                <div className={style.boxFormLogin}>
                    <InputCpf />
                    <InputSenhaComplexa />
                    <BtnSubmitForm tituloBtn="LOGAR" functionOnclick={verificaLogin} />
                    <div className={style.boxBtnsSecondary}>
                        <input type="button" className={style.btnSecondary} value="Cadastre-se" />
                        <input type="button" className={style.btnSecondary} value="Recuperar Senha" onClick={abreModalRecuperacaoSenha}/>
                    </div>
                </div>
            </div>
            <div className={style.boxImgBackground}>
                <img src="https://i.pinimg.com/236x/da/9a/56/da9a5680ca2741b1c06817b7ed785f1f.jpg" alt="" />
            </div>

            {abreModal && (
                <Modal
                    conteudoModal={conteudoModal}
                    textoBtn="Ok"
                    funcaoClickBtn={vai}
                />
            )}
        </div>
    )
}
