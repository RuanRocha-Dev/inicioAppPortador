import style from './InputData.module.css';

export function InputData () {
    return (
        <div className={style.container}>
            <input type="date" required/>
            <label htmlFor="Nome" className={style.labelData}>
                <span className={style.contentCelular}> Data de Nascimento </span>
            </label>
        </div>
    )
}