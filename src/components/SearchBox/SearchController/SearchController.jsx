import Form from "../../CommonComponents/Form";

/**
 * Компонент отвечает за управление поиском
 * 
 * @component
 * 
 * @returns JSX.Element
 */

export default function SearchController() {
    return (
        <Form searchStart={func} classButton={''} nameButton={''} searchIcon={''} />
    )
}
