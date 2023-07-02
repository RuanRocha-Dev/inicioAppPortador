import style from './InputCelular.module.css';

export function InputCelular () {
    return (
        <div className={style.container}>
            <input type="text" required/>
            <label htmlFor="Nome" className={style.labelCelular}>
                <span className={style.contentCelular}> Celular </span>
            </label>
        </div>
    )
}
