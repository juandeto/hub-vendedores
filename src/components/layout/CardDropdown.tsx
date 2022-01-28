import  { FC, useRef, useState, useEffect } from 'react'; 
import { JsxProps } from 'react-app-env';
import FlexBoxContainer from 'components/basics/FleboxContainer';
import AccordionWrapper from 'components/basics/AccordionWrapper';
import jsxHandler from 'utils/jsxHandler';

interface PropsCardContent {
    dropdownContent: [],
    isOpen: boolean
}

const CardContent: FC<PropsCardContent> = function({dropdownContent, isOpen}: PropsCardContent) {

    return (
        <AccordionWrapper isOpen={isOpen}>
            <>
             {
                Object.values(dropdownContent).map((s: JsxProps[] )=> {
                    
                    return <FlexBoxContainer margin="32px 0" gap="32px" alignItems='flex-start'>
                            {
                                s.map((jsx:JsxProps, key:number)=> {
                                    const { type, properties} = jsx
                
                                    return jsxHandler({type, properties, key})
                                })
                            }
                        </FlexBoxContainer>
                })
            }
            </>
        </AccordionWrapper>
    )
}

export default CardContent;