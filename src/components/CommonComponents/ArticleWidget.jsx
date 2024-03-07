/**
 * Компонент который содержит заголовок-ссылку и необходимый контент.
 * 
 * @component
 * 
 * @param {Object} props 
 * @param {string} props.title - текст заголовка
 * @param {ReactNode} props.titlesButton - опционально, содержит компонент кнопки
 * @param {string} props.link - ссылка на основной контент
 * @param {ReactNode} props.children - контент для предварительного просмотра
 * 
 * @returns JSX.Element
 */

export default function ArticleWidget(props) {
    const { title, link, titlesButton, children } = props;

    return (
        <>  
            <div>
                <h3>
                    {<a href={link}>{title}</a>}
                </h3>
                {titlesButton}
            </div>
            {children}
        </>
    )
}