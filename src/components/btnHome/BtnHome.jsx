/* eslint-disable react/prop-types */
import style from './BtnHome.module.css';

export function BtnHome (props) {
    return (
        <div className={style.containerBtn}>
            <div className={style.containerIcone}>
                <i className={props.icone}></i>
            </div>
            <div className={style.containerSpan}>
                <span> {props.spanIcone} </span>
            </div>
        </div>
    )
}