/* eslint-disable react/prop-types */
import style from './BtnSubmitForm.module.css';

export function BtnSubmitForm (props) {
    return (
        <input type="button" className={style.btnSubmit} value={props.tituloBtn} onClick={props.functionOnclick} />
    )
}
