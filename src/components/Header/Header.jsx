import NewsBox from "./NewsBox/NewsBox";
import PromotionWidget from "./PromotionWidget/PromotionWidget";

/**
 * Виджет который содержит блок с новостями и рекомендацию сервиса
 * 
 * @component
 * @returns JSX.Element
 */

export default function Header() {
    return (
        <>
            <NewsBox />
            <PromotionWidget />
        </>
    )
}