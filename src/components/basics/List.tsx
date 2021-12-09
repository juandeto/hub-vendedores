import  { FC, ComponentType } from 'react'; 
import Paragraph, { sizes } from 'components/basics/Paragraph'

export type Item = {
    content?: string,
    onClick?: () => void,
    children?: React.ReactElement | ComponentType | keyof JSX.IntrinsicElements;
}

interface PropsUlist {
   ListType?: 'ul' | 'ol',
   items: Item[],
   fontSize?: sizes,
   lineHeight?: string,
   bulletType?: string,
   colorBullet?: 'primary' | 'secondary' | 'text',
   fontWeight?: string,
   margin?:string
}


const UList: FC<PropsUlist> = ({
                                ListType="ul",
                                items, 
                                fontSize='normal',
                                fontWeight= 'normal',
                                lineHeight= "24px", 
                                bulletType, 
                                margin="0",
                                 colorBullet="primary"}: PropsUlist) => (
        <ListType
        className={`list__content`}
        >
            {
            items.map((item, idx) => <li 
                                        style={{lineHeight: lineHeight, margin: margin, fontWeight: fontWeight}}
                                        className={`li__item ${bulletType} ${fontSize} ${colorBullet}-bull`}
                                        key={idx} 
                                        onClick={item.onClick}>
                                       {item.children ? item.children : <Paragraph paragraph={item.content || ""} fontSize={fontSize}/>}
                                        </li>)
            }
        </ListType>
    )

export default UList;