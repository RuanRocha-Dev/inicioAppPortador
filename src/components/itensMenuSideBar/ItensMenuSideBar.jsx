/* eslint-disable react/prop-types */
import style from './itensMenuSideBar.module.css';

export function ItensMenuSideBar (props) {
    return (
        <div className={style.containerItensMenu}>
            <i className={`${props.nomeICone} ${style.firstIcon}`}></i>
            <p> {props.nomeMenu} </p>
            <i className={`fa-solid fa-chevron-right ${style.iconDefaultRight}`}></i>
        </div>
    )
}