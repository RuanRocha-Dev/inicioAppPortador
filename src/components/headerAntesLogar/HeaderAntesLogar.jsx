import style from './HeaderAntesLogar.module.css';

import { useNavigate } from 'react-router-dom';

export function HeaderAntesLogar (props) {
    const navigate = useNavigate();
    
    function backButton () {
        navigate(-1)
    }

    return (
        <header className={style.container}>
            <div onClick={backButton}> 
                <i className='fa fa-arrow-left'></i> 
            </div>
            <h4> {props.textHeader} </h4>
        </header>
    )
}