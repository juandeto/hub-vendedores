import  { FC } from 'react'; 
import  MODULES_CONTENT  from 'utils/ModulesContents'
import CardWrapper from 'components/modules/CardsModule/CardWrapper'
import { JsxRef } from 'react-app-env'
import Title from 'components/basics/Title'
import Spacer from 'components/basics/Spacer';
import Paragraph from 'components/basics/Paragraph';


const CardsDisplay: FC = function() {
  return <div className="cardsDisplay">
        <Spacer type="vertical" size="32px" />
        <Title color="text" title="Vender productos en línea es una excelente manera de iniciar un negocio y ganar dinero"/>
        <Spacer type="vertical" size="16px" />
        <Paragraph fontSize="big" paragraph="Y si va a vender en cualquier lugar, debería hacerlo en Amazon. Afortunadamente, el mercado de Amazon es enorme y está creciendo más que nunca a medida que las personas pasan a comprar en línea casi cualquier tipo de producto." />
        <Spacer type="vertical" size="16px" />
        <Paragraph fontSize="big" paragraph="Y si va a vender en cualquier lugar, debería hacerlo en Amazon. Afortunadamente, el mercado de Amazon es enorme y está creciendo más que nunca a medida que las personas pasan a comprar en línea casi cualquier tipo de producto." />
        <Spacer type="vertical" size="32px" />
        <div>
            {
            MODULES_CONTENT.map(( m: JsxRef, i:number) => <CardWrapper key={m.id} module={m} index={i}/>)
            }  
        </div>
    </div>
}



export default CardsDisplay;