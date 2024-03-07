import Button from "../CommonComponents/Button";
import ArticleWidget from "../CommonComponents/articleWidget";

/**
 * Секция виджетов с информацией
 * 
 * @returns JSX.Element
 */

export default function SectionInformation() {
    return (
        <div>
            <ArticleWidget title={title} link={link} children={<Weather />} />
            <ArticleWidget title={title} link={link} children={<Popular />} />
            <ArticleWidget title={title} link={link} children={<CountryInfo />} />
            <ArticleWidget title={title} link={link} titlesButton={<Button onClick={func} classButton={''} name={''} />} children={<TV />} />
            <ArticleWidget title={title} link={link} children={<Live />} />
        </div>
    )
}