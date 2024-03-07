/**
 * Компонент управляет  изображением-ссылкой.
 * 
 * @component
 * 
 * @param {Object} props  
 * @param {string} props.link - ссылка для перехода при клике
 * @param {string} props.imgSrc - ссылка для отрисовки изображения
 * 
 * @returns JSX.Element
 */

export default function Label(props) {
    const { link, imgSrc } = props;

    return (
        <a href={link}><img src={imgSrc}/></a>
    )
}