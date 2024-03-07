/**
 * Компонент отвечает за отображение элемента данных биржи
 * 
 * @component
 * 
 * @param {Object} props 
 * @param {Object} props.object - объект элемента списка
 * @param {string} props.object.id - id
 * @param {string} props.object.nameItem - код валюты 
 * @param {string} props.object.nameExchange - название биржи
 * @param {string} props.object.value - курс
 * @param {string} props.object.changeValue - изменение курса
 * 
 * @returns JSX.Element
 */

export default function ExchangeItem(props) {
    const { object } = props;
    const { id, nameItem, nameExchange, value, changeValue } = object;

    return (
        <li key={id}>
            <span>{nameItem}</span>
            <span>{nameExchange}</span>
            <span>{value}</span>
            <span>{changeValue}</span>
        </li>
    )
}