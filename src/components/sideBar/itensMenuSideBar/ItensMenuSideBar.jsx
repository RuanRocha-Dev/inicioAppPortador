/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import style from './itensMenuSideBar.module.css';

export function ItensMenuSideBar (props) {
    return (
        <Link to={props.toLink} className={style.containerItensMenu}> 
            <i className={`${props.nomeICone} ${style.firstIcon}`}></i>
            <p> {props.nomeMenu} </p>
            <i className={`fa-solid fa-chevron-right ${style.iconDefaultRight}`}></i>
        </Link>
    )
}