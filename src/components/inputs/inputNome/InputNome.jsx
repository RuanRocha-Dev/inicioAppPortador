import style from './InputNome.module.css';

export function InputNome (props) {
    return (
        <div className={style.container}>
            <input type="text" required/>
            <label htmlFor="Nome" className={style.labelName}>
                <span className={style.contentName}> {props.tipoNome} </span>
            </label>
        </div>
    )
}
