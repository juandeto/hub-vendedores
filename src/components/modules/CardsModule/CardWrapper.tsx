import  { FC, useState } from 'react'; 
import Card from 'components/basics/Card'
import SeeMoreLabel from 'components/layout/SeeMoreLabel'
import CardContent from 'components/layout/CardContent'
import CardDropdown from 'components/layout/CardDropdown'
import { JsxRef } from 'react-app-env'


interface PropsCardWrapper {
    module: JsxRef,
    index: number
}

const CardWrapper: FC<PropsCardWrapper> = ({module, index}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { id, cardContent, dropdownContent } = module
    const handleSeeMore = () => setIsOpen(!isOpen)
    
    return (
        <Card id={id} addedClass="cardWrapper">
            <CardContent cardContent={cardContent} index={index}/>
            <SeeMoreLabel index={index} handleSeeMore={handleSeeMore} isOpen={isOpen}/>
            <CardDropdown 
            isOpen={isOpen}
            dropdownContent={dropdownContent} 
            index={index}/>
        </Card>
    )
}

export default CardWrapper;