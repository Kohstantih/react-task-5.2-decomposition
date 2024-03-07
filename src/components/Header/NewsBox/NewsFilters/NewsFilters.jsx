import FilterButton from "../../../CommonComponents/FilterButton";

/**
 * Компонент отвечает за отображение списка фильтров и управление ими
 * 
 * @component
 * 
 * @param {Object} props
 * @param {Array} props.filters - объект с данными для отображения фильтра
 * @param {Function} props.func - функция которая осуществляет фильтрацию
 * @param {string} props.date - строка с датой
 * 
 * @returns JSX.Element
 */

export default function NewsFilters(props) {
    const { filters, func, date } = props;

    return (
        <div>
            <ul>
                {filters.map((f) => <FilterButton objFilter={f} filtration={func} />)}
            </ul>
            <span>{date}</span>
        </div>
    )
}
