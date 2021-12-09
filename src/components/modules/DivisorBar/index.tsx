import  { FC } from 'react'; 
import Paragrapgh from 'components/basics/Paragraph'
import MediaLinks from 'components/layout/MediaLinks'


const DivisorBar: FC = () => (
        <nav className="divisorBar">
            <Paragrapgh paragraph="Guía para vender con Mercado Libre" />
            <MediaLinks />
        </nav>
    )

export default DivisorBar;