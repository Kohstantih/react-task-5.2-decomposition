import Label from "../CommonComponents/Label";
import SearchController from "./SearchController/SearchController";
import SearchFilters from "./SearchFilters/SearchFilters";

/**
 * Компонент отвечает за управление блоком поиска
 * 
 * @returns JSX.Element
 */

export default function SearchBox() {
    return (
        <>
            <Label />
            <div>
                <SearchFilters searchFilters={filtersList} />
                <SearchController />
                <span>Найдется все. Например,<span>{exampleSearch}</span></span>
            </div>
        </>
        
    )
}