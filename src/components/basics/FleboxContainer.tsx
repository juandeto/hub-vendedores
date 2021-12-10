import  { FC } from 'react'; 


type justify = "row" | "row-reverse" | "column" | "column-reverse"
type wrap = "nowrap" | "wrap" | "wrap-reverse" 


interface PropsFlexBoxContainer {
    justifyContent?: string,
    alignItems?: string,
    flexDirection?: justify,
    flexBasis?: string,
    flexWrap?: wrap,
    gap?: string,
    padding?: string,
    children: (JSX.Element | null) | (JSX.Element | null)[]
}

const FlexBoxContainer: FC<PropsFlexBoxContainer> = ({
    justifyContent = "justify-content",
    alignItems="center",
    flexDirection="column",
    flexBasis="content",
    flexWrap="wrap",
    gap="16px",
    padding="8px 16px",
    children
}) => {

    return (
        <div style={{
                display: "flex",
                alignItems: alignItems,
                justifyContent: justifyContent,
                flexDirection: flexDirection, 
                flexBasis: flexBasis, 
                flexWrap: flexWrap,
                gap: gap,
                padding: padding}}>
                    {children}
        </div>
    )
}

export default FlexBoxContainer;


// style={{justifyContent: justifyContent, 
//     alignItems: alignItems, 
//     flexDirection: flexDirection, 
//     flexBasis: flexBasis, 
//     flexWrap: flexWrap}}