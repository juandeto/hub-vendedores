import  { FC, useRef, useState, useEffect } from 'react'; 
import { JsxProps } from 'react-app-env'
import jsxHandler from 'utils/jsxHandler'

interface PropsCardContent {
    dropdownContent: JsxProps[],
    index: number,
    isOpen: boolean
}

const CardContent: FC<PropsCardContent> = ({dropdownContent, isOpen}: PropsCardContent) => {
    const dropRef = useRef<HTMLHeadingElement>(null)
    const [childHeight, setChildHeight] = useState<number>(0)
    const childrens = dropRef.current?.children
    const padding = 16

    useEffect(() => {
        if(childrens?.length){
            let height = 0
            for (let i = 0; i < childrens.length; i+=1) {
                height +=  childrens[i]?.clientHeight || 0;
            } 
            setChildHeight(height)
        }
    })

    return (
        <div ref={dropRef} 
        style={{
            padding:  `${isOpen ? padding : 0}px`,
            maxHeight: `${isOpen ? (padding * 4) + (childHeight || 0) : 0}px`
        }}
            className='cardDropdown'>
            {
                dropdownContent.map((jsx:JsxProps, key: number)=> {
                    const { type, properties} = jsx

                    return jsxHandler({type, properties, key})
                })
            }
        </div>
    )
}

export default CardContent;