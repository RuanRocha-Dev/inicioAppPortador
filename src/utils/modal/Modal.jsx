// import { useEffect, useRef } from 'react';
import style from './Modal.module.css';

export function Modal (props) {
    
    function fechaModal (el) {
        const element = el.target;
        if(element.classList.contains('animate__animated')) {
            props.funcaoClickBtn(false);
        }
    }

    // const thisRef = useRef(null);

    // useEffect(() => {
    //     const modalContainer = thisRef.current;
    //     modalContainer.classList.toggle('animate__slideOutDown')
    // })    USAR ESSE CÓDIGO COMENTADO SE CASO QUISER COLCOAR UMA ANIMAÇÃO DE SAIDA DO MODAL

    return (
        <div onClick={fechaModal} className={`${style.containerModal} animate__animated animate__faster animate__slideInUp`}>
            <div className={style.boxModal}>
                <p> {props.conteudoModal} </p>
                <input type="button" value={props.textoBtn} onClick={() => props.funcaoClickBtn() }/>
            </div>
        </div>
    )
}
