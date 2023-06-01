/* eslint-disable react/prop-types */
import style from './BtnHome.module.css';

export function BtnHome (props) {
    const iconOrImg = props?.icone != "" ? <i className={props?.icone}></i> : <img src={props?.imagem} />;

    return (
        <div className={style.containerBtn}>
            <div className={style.containerIcone}>
                {iconOrImg}
            </div>
            <div className={style.containerSpan}>
                <span> {props.spanIcone} </span>
            </div>
        </div>
    )
}