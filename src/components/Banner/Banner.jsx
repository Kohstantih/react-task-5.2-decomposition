import Label from "../CommonComponents/Label";

/**
 * Виджет рекламного баннера
 * 
 * @component
 * 
 * @param {Object} props 
 * @param {string} props.link - ссылка на контент баннера
 * @param {string} props.imgSrc - ссылка на изображение баннера
 * 
 * @returns JSX.Element
 */

export default function Banner(props) {
    const { link, imgSrc } = props;

    return (
        <Label
            link={link}
            imgSrc={imgSrc}
        />
    )
}