import { useState } from 'react';

import style from './InputCpf.module.css';
import { formatarCPF } from "../../../funcoesGlobais/FuncoesGlobais";

export function InputCpf (props) {
    let [cpf, setCpf] = useState('');

    function formatandoCpf (el) {
        cpf = formatarCPF(el.target.value);
        setCpf(cpf);
    }

    return (
        <div className={style.container}>
            <input type="text" onChange={(event) => {(props.functionChange != undefined ? props.functionChange(event) : ''); formatandoCpf(event)}} value={cpf} maxLength='11' inputMode='numeric' required/>
            <label htmlFor="Cpf" className={style.labelName}>
                <span className={style.contentName}> CPF </span>
            </label>
        </div>
    )
}
