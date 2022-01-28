import  { FC, useRef, useState, useEffect } from 'react'; 

interface PropsAccordionWrapper {
    isOpen: boolean
}

const defaultProps: PropsAccordionWrapper = {
    isOpen: false
}

const AccordionWrapper: FC<PropsAccordionWrapper> = function({
   isOpen, children
}) {
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
            setChildHeight(height )
        }
    })
    return (
        <div ref={dropRef} 
        style={{
            padding:  `${isOpen ? padding : 0}px 0`,
            maxHeight: `${isOpen ? (padding * 4) + (childHeight || 0) : 0}px`
        }}
            className='cardDropdown'>
                    {children}
        </div>
    )
}

AccordionWrapper.defaultProps = defaultProps;

export default AccordionWrapper;
