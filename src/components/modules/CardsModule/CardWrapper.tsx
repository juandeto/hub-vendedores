import  { FC, useState } from 'react'; 
import { useTranslation } from 'react-i18next';

// components
import Card from 'components/basics/Card'
import SeeMoreLabel from 'components/layout/SeeMoreLabel'
import CardContent from 'components/layout/CardContent'
import CardDropdown from 'components/layout/CardDropdown'

// utils
import { JsxRef } from 'react-app-env'

interface PropsCardWrapper {
    module: JsxRef,
    index: number
}

const CardWrapper: FC<PropsCardWrapper> = function({module, index}) {
    const { t } = useTranslation('modules');
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { id, cardContent, dropdownContent } = module
    const handleSeeMore = () => setIsOpen(!isOpen)
    const innerId = `${id}--${index}`
    
    return (
        <Card id={t(id)} addedClass="cardWrapper">
            <CardContent cardContent={cardContent} index={index}/>
            <SeeMoreLabel id={innerId} index={index} handleSeeMore={handleSeeMore} isOpen={isOpen}/>
            <CardDropdown 
                id={innerId}
                isOpen={isOpen}
                dropdownContent={dropdownContent}
            />
        </Card>
    )
}

export default CardWrapper;