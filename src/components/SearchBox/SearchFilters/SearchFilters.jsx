import FilterButton from "../../CommonComponents/FilterButton";

/**
 * Компонент отвечает за отображение и управление фильтрами поиска
 * 
 * @component
 * 
 * @param {Object} props
 * @param {Array} props.searchFilters - массив объектов с данными для отображения фильтров
 * 
 * @returns JSX.Element
 */

export default function SearchFilters(props) {
    const { searchFilters } = props;

    return (
        <ul>
            {searchFilters.map((f) => <FilterButton objFilter={f} filtration={func}/>)}
        </ul>
    )
}