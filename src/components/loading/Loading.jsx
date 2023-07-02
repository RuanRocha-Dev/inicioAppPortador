import style from './Loading.module.css';

import { Player } from '@lottiefiles/react-lottie-player';

export function Loading () {
    return (
        <div className={style.container}>
            <div className={style.boxLoading}>
                <Player 
                    src="https://assets7.lottiefiles.com/packages/lf20_b88nh30c.json"  
                    background="transparent"  
                    speed="1"  
                    style={{width: '100%'}}
                    loop   
                    autoplay>
                </Player>
            </div>
        </div>
    )
}