import style from './Cadastro.module.css';

import { HeaderAntesLogar } from '../../components/headerAntesLogar/HeaderAntesLogar';
import { InputNome } from '../../components/inputs/inputNome/InputNome';
import { InputEmail } from '../../components/inputs/inputEmail/InputEmail';
import { InputCelular } from '../../components/inputs/inputCelular/InputCelular';
import { InputSexo } from '../../components/inputs/inputSexo/InputSexo';
import { InputData } from '../../components/inputs/inputData/InputData';
import { InputSenhaComplexa } from '../../components/inputs/inputSenhaComplexa/InputSenhaComplexa';
import { BtnSubmitForm } from '../../components/botoes/btnSubmitForm/BtnSubmitForm';

export function Cadastro () {
    return (
        <div className={style.container}>
            <HeaderAntesLogar textHeader="CADASTRO" />
            <p>Complete o formulário abaixo para se cadastrar.</p>
            <InputNome tipoNome="Nome Completo"/>
            <InputEmail />
            <InputCelular /> 
            <InputSexo /> 
            <InputData /> 
            <InputSenhaComplexa textSenha="Senha" />
            <p>
                Esta será sua senha para acesso em <b> TODAS </b> as lojas e redes. <br/>
                Sua senha deve seguir as seguintes exigências: <br />
            </p>
            <ul>
                <li> Ter pelo menos oito caracteres de comprimento </li>
                <li> Ao menos um caractere de maiúsculo (A-Z) </li>
                <li> Ao menos um caractere de maiúsculo (a-z) </li>
                <li> Ao menos um caractere numérico </li>
                <li> Ao menos um caractere especial (simbolos) </li>
            </ul>
            <InputSenhaComplexa textSenha="Repita a senha" />
            <BtnSubmitForm tituloBtn="Cadastrar" />
        </div>
    )
}