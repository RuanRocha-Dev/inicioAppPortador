// import { useEffect, useRef } from 'react';

import style from './Modal.module.css';

export function Modal (props) {
    // const thisRef = useRef(null);

    // useEffect(() => {
    //     const modalContainer = thisRef.current;
    //     modalContainer.classList.toggle('animate__slideOutDown')
    // })    USAR ESSE CÓDIGO COMENTADO SE CASO QUISER COLCOAR UMA ANIMAÇÃO DE SAIDA DO MODAL

    return (
        <div className={`${style.containerModal} animate__animated animate__faster animate__slideInUp`}>
            <div className={style.boxModal}>
                <p> {props.conteudoModal} </p>
                <input type="button" value={props.textoBtn} onClick={(event) => props.funcaoClickBtn(false) }/>
            </div>
        </div>
    )
}
