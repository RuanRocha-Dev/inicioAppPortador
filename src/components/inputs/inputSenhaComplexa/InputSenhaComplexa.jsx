import style from './InputSenhaComplexa.module.css';

export function InputSenhaComplexa (props) {
    return (
        <div className={style.container}>            
            <input type="password" name='senha' id="senhaField" onChange={(event) => (props.functionChange != undefined ? props.functionChange(event) : '')} minLength='8' maxLength='20' inputMode='text' required/>
            <label htmlFor="Senha" className={style.labelName}>
                <span className={style.contentName}> SENHA </span>
            </label>
        </div>
    )
}
