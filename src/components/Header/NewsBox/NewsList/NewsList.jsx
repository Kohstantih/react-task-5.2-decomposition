/**
 * Компонент отвечает за отображение списка новостей
 * 
 * @component
 * 
 * @param {Object} props 
 * @param {Object} props.list - массив объектов новостей
 * 
 * @returns JSX.Element
 */

export default function NewsList(props) {
    const { list } = props;
    return (
        <ul>
            {list.map((n) => <News object={n} />)}
        </ul>
    )
}