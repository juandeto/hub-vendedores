import  { FC, useState } from 'react'; 
import Dropdown from 'components/basics/Dropdown';
import { lngs } from 'utils/Languages'
import { useTranslation, Trans } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa'



const LangSelector: FC = function() {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const { t, i18n } = useTranslation();
    const languages = Object.keys(lngs).map((lng) => lngs[lng].nativeName)
    
    const changeLang = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    const handleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <div className="languageSelector">
            <span className="languageSelector__widget">
                <p className="languageSelector__label">Lang:</p>
                <span className="languageSelector__current">{lngs[i18n.resolvedLanguage || "es"].nativeName}</span>
                <span onClick={handleDropdown} className="languageSelector__chevron"><FaChevronDown /></span>
            </span>
            <Dropdown show={showDropdown} itemClass='langItem' items={languages} cta={changeLang}/>
       </div>
    )
}


export default LangSelector;