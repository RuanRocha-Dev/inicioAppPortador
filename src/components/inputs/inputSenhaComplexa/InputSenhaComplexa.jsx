import { useRef } from 'react';
import style from './InputSenhaComplexa.module.css';

export function InputSenhaComplexa (props) {
    const inputSenha = useRef(null);

    function revelaSenha (icon) {
        icon.target.classList.toggle('fa-eye');
        let inputField = inputSenha.current; 
        
        if(inputField.getAttribute('type') == 'password') {
            inputField.removeAttribute('type');
            inputField.setAttribute('type', 'text');
        } else if (inputField.getAttribute('type') == 'text') {
            inputField.removeAttribute('type');
            inputField.setAttribute('type', 'password');
        }
    }
    return (
        <div className={style.container}>            
            <input type="password" name='senha' onChange={(event) => (props.functionChange != undefined ? props.functionChange(event) : '')} minLength='8' maxLength='20' inputMode='text' ref={inputSenha} required/>
            <label htmlFor="Senha" className={style.labelName}>
                <span className={style.contentName}> {props.textSenha} </span>
            </label>
            <i className='fa fa-eye-slash' onClick={(ev) => revelaSenha(ev)}></i>
        </div>
    )
}
