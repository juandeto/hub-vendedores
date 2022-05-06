import  { FC } from 'react'; 
import Paragraph, { sizes } from 'components/basics/Paragraph'

export type Item = {
    content?: string,
    children?: React.ReactElement
}

type colorBull = 'primary' | 'secondary' | 'text'
type list = 'ul' | 'ol'

interface PropsUlist {
   ListType?: list,
   items: Item[],
   fontSize?: sizes,
   lineHeight?: string,
   bulletType?: string,
   colorBullet?: colorBull,
   fontWeight?: string,
   margin?:string,
}

const defaultProps = {
    ListType: 'ul' as list,
    fontSize: 'normal' as sizes,
    fontWeight:  'normal',
    lineHeight:  "24px", 
    bulletType: 'disc', 
    margin: "0",
     colorBullet: 'primary' as colorBull,
    }


const UList: FC<PropsUlist> = function({
                                ListType="ul",
                                items, 
                                fontSize,
                                fontWeight,
                                lineHeight, 
                                bulletType, 
                                margin,
                                 colorBullet}: PropsUlist) {
                                    

  return <ListType
        className="list__content"
        >
            {
            items.map((item, idx) => <li 
                                        style={{lineHeight, margin, fontWeight}}
                                        className={`li__item ${bulletType} ${fontSize} ${colorBullet}-bull`}
                                         // eslint-disable-next-line react/no-array-index-key
                                        key={idx} 
                                      >
                                       {item.children ? item.children : <Paragraph 
                                                                            lineHeight='32px' 
                                                                            display="inline" 
                                                                            paragraph={item.content || ""} 
                                                                            fontSize={fontSize}/>}
                                        </li>)
            }
        </ListType>
}



UList.defaultProps = defaultProps

export default UList;