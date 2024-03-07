/**
 * Компонент отвечает за отображение элемента из списка новостей
 * 
 * @component
 * 
 * @param {Object} props 
 * @param {Object} props.object - объект с данными для отображения новости
 * @param {Object} props.object.id - id
 * @param {Object} props.object.icon - иконка элемента
 * @param {Object} props.object.srcNews - ссылка на полную новость
 * @param {Object} props.object.text - текст краткого представления новости
 * 
 * @returns JSX.Element
 */

export default function News(props) {
    const { object } = props;
    const {id, icon, srcNews, text} = object;

    return (
        <li key={id}>
            <img src={icon} />
            <a href={srcNews}>
                {text}
            </a>
        </li>
    )
}