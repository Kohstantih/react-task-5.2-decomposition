import ExchangeList from "./ExchangeList/ExchangeList";
import NewsFilters from "./NewsFilters/NewsFilters";
import NewsList from "./NewsList/NewsList";

/**
 * Компонент управляет блоком новостей
 * 
 * @component
 * 
 * @returns JSX.Element
 */

export default function NewsBox() {
    return (
        <>
            <NewsFilters filters={[]} />
            <NewsList list={[]} />
            <ExchangeList list={[]} exchangeLink={''}/>
        </>
    )
}