/**
 * Компонент отвечает за отображение кнопки-фильтра.
 * 
 * @component
 * 
 * @param {Object} props 
 * @param {Object} props.objFilter - объект с данными для отображения кнопки фильтра
 * @param {Function} props.filtration - обработчик события клика по кнопке
 * 
 * @returns JSX.Element
 */

export default function FilterButton(props) {
    const { objFilter, filtration } = props;
    return (
        <li key={objFilter.id} >
            <Button onClick={filtration} classButton={objFilter.activeStatus} name={objFilter.name} />
        </li>
    )
}