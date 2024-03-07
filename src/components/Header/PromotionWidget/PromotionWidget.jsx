import Label from "../../CommonComponents/Label"
import ArticleWidget from "../../CommonComponents/articleWidget"

/**
 * Компонент отвечает за отображение виджета рекламы сервиса
 * 
 * @component
 * 
 * @param {Object} props
 * @param {Object} props.objPromotion - объект рекламного предложения
 * @param {Object} props.objPromotion.link - ссылка на основной контент предложения
 * @param {Object} props.objPromotion.imgSrc - ссылка на изображение
 * @param {Object} props.objPromotion.title - текст заголовка
 * 
 * @returns JSX.Element
 */

export default function PromotionWidget(props) {
    const { objPromotion } = props;
    const {link, imgSrc, title} = objPromotion;
    

    return (
        <>
            <Label link={link} imgSrc={imgSrc} />
            <ArticleWidget title={title} link={link} children={children} />
        </>
    )
}