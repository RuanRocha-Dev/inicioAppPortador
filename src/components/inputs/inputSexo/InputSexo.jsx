import style from './InputSexo.module.css';

export function InputSexo () {
    return (
        <div className={style.container}>
            <select type="text" required>
                <option value="">Sexo</option>
                <option value="">Masculino</option>
                <option value="">Feminino</option>
                <option value="">Prefiro não informar</option>
                <option value="">Outros</option>
            </select>
        </div>
    )
}