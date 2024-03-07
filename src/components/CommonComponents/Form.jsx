import Button from "./Button";

/**
 * Компонент формы, с инпутом, иконкой, и кнопкой управления
 * 
 * @component
 * 
 * @param {Object} props 
 * @param {Function} props.searchStart- обработчик клика по кнопке
 * @param {string} props.classButton - стилизация кнопки
 * @param {string} props.nameButton - имя кнопки
 * @param {string} props.searchIcon - иконка поиска
 * 
 * @returns JSX.Element
 */

export default function Form(props) {
    const { searchStart, classButton, nameButton, searchIcon } = props;

    return (
        <>
            <form>
                <input type="text" />
                {searchIcon}
                <Button
                    onClick={searchStart}
                    classButton={classButton}
                    name={nameButton}
                />
            </form>
        </>
    )
}