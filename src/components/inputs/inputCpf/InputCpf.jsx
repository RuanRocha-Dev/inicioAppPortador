import { useState } from 'react';

import style from './InputCpf.module.css';

export function InputCpf (props) {
    let [cpf, setCpf] = useState('');

    function formatandoCpf (el) {
        cpf = formatarCPF(el.target.value);
        setCpf(cpf);
    }

    return (
        <div className={style.container}>
            <input type="text" name='cpf' id="cpf" onChange={(event) => {props.functionChange(event); formatandoCpf(event)}} value={cpf} maxLength='11' required/>
            <label htmlFor="cpf" className={style.labelName}>
                <span className={style.contentName}> CPF </span>
            </label>
        </div>
    )
}
