/* eslint-disable react/prop-types */
import style from './Header.module.css';

export const Header = (props) => {
    return (
        <header>
            <div>
                <img src={props.urlImg} />
            </div>
            <label className={style.toggle}>
                <input type="checkbox"/>
                <span className={style.slider}></span>
            </label>
        </header>
    )

}
