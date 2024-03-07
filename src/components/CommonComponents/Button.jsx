/**
 * Компонент отвечает за отображение кнопки.
 * 
 * @component
 * 
 * @param {Object} props
 * @param {Function} props.onClick - обработчик клика по кнопке
 * @param {string} props.classButton - стилизация кнопки
 * @param {string} props.name - имя кнопки
 * 
 * @returns JSX.Element
 */

export default function Button(props) {
    const { onClick, classButton, name } = props;

    return (
        <button onClick={onClick} className={classButton}>{name}</button>
    )
}