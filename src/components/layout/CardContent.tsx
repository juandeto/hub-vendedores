import  { FC } from 'react'; 
import { JsxProps } from 'react-app-env'
import jsxHandler from 'utils/jsxHandler'
import Title from 'components/basics/Title'
import Spacer from 'components/basics/Spacer';

interface PropsCardContent {
    cardContent: JsxProps[],
    index: number
}

const CardContent: FC<PropsCardContent> = ({cardContent, index}: PropsCardContent) => {
    
    return (
        <div className="cardContent" >
            <Title Tag="h3" title={`MÓDULO ${index + 1}`} color='primary'/>
            <Spacer type="vertical" size="16px"/>
            {
                cardContent.map((jsx:JsxProps, key:number)=> {
                    const { type, properties} = jsx

                    return jsxHandler({type, properties, key})
                })
            }
        </div>
    )
}

export default CardContent;