import  { FC } from 'react'; 
import Paragrapgh from 'components/basics/Paragraph'
import MediaLinks from 'components/layout/MediaLinks'


const DivisorBar: FC = function() {
  return <div className="divisorBar" role="presentation">
            <Paragrapgh paragraph="Guía para vender con Mercado Libre" />
            <MediaLinks />
        </div>
}

export default DivisorBar;