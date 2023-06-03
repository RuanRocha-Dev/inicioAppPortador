import style from './InputSenhaComplexa.module.css';

export function InputSenhaComplexa (props) {
    return (
        <div className={style.container}>
            <input type="password" name='senha' id="senha" onChange={(event) => props.functionChange(event)} minLength='8' maxLength='20' required/>
            <label htmlFor="senha" className={style.labelName}>
                <span className={style.contentName}> SENHA </span>
            </label>
        </div>
    )
}
