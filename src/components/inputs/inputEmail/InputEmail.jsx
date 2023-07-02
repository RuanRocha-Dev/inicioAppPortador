import style from './InputEmail.module.css';

export function InputEmail (props) {
    return (
        <div className={style.container}>
            <input type="text" required/>
            <label htmlFor="Email" className={style.labelEmail}>
                <span className={style.contentEmail}> E-mail </span>
            </label>
        </div>
    )
}
