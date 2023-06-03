import style from './InputSenhaComplexa.module.css';

export function InputSenhaComplexa () {
    return (
        <div className={style.container}>
            <input type="password" name='senha' id="senha" required/>
            <label htmlFor="senha" className={style.labelName}>
                <span className={style.contentName}> SENHA </span>
            </label>
        </div>
    )
}
