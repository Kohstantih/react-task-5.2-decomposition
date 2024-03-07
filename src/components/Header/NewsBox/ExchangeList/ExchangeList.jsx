import ExchangeItem from "./ExchangeItem";

/**
 * Компонент отображает список данных биржи
 * 
 * @component
 * 
 * @param {Object} props 
 * @param {Array} props.list - массив из объектов с данными
 * @param {string} props.exchangeLink - ссылка на страницу с подробной информацией
 * 
 * @returns JSX.Element
 */

export default function ExchangeList(props) {
    const { list, exchangeLink } = props;
    return (
        <div>
            <ul>
                {list.map((n) => <ExchangeItem object={n} />)}
            </ul>
            <a href={exchangeLink}>...</a>
        </div>
    )
}