/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import style from './itensMenuBottomHome.module.css';

export function ItensMenuBottomHome (props) {
    let linkRouter = '';
    
    if(props.toLink != undefined) {
        linkRouter = <Link to={props.toLink}> <span className={style.spanItemMenu} style={props.estiloIconAndLabel}> {props.textSpan} </span> </Link>;
    } else {
        linkRouter = <span className={style.spanItemMenu} style={props.estiloIconAndLabel}> {linkRouter} {props.textSpan} </span>;
    }

    return (
        <div className={style.containerItemMenu} style={props.estilo} onClick={props.funtionCallBack}>
            <i className={`${style.iconItemMenu} ${props.nameIcon}`} style={props.estiloIconAndLabel}></i>
            {linkRouter}
        </div>
    )
    // 'estilo' type is missing in props validation
}
