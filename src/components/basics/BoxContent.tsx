import  { FC, CSSProperties } from 'react'; 

interface PropsBoxContent {
    children:  (JSX.Element | null) | (JSX.Element | null)[],
    styles: CSSProperties
}


const BoxContent: FC<PropsBoxContent> = function({children, styles={width: "auto", height: "auto", padding: "8px"}}) {
  return <div 
        style={{...styles}}
        className="boxContent">
            {children}
        </div>
}

export default BoxContent;