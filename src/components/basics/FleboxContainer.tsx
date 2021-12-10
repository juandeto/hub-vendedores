import  { FC } from 'react'; 


type direction = "column" | "column-reverse" | "row" | "row-reverse" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset" & typeof defaultDirection
type wrap = "nowrap" | "wrap" | "wrap-reverse" 

const defaultDirection = "column"

interface PropsFlexBoxContainer {
    justifyContent?: string,
    alignItems?: string,
    flexDirection?: direction & 'column',
    flexBasis?: string,
    flexWrap?: wrap & 'wrap',
    gap?: string,
    padding?: string,
    children: (JSX.Element | null) | (JSX.Element | null)[]
}

const defaultProps = {
    justifyContent: "normal",
    alignItems:"center",
    flexBasis:"content",
    gap:"16px",
    padding:"8px 16px",
}

const FlexBoxContainer: FC<PropsFlexBoxContainer> = function({
    justifyContent,
    alignItems,
    flexDirection,
    flexBasis,
    flexWrap,
    gap,
    padding,
    children
}) {
    console.log('flex direction: ', flexDirection)
    return (
        <div style={{
                display: "flex",
                alignItems: alignItems,
                justifyContent: justifyContent,
                flexDirection: flexDirection && "column", 
                flexBasis: flexBasis, 
                flexWrap: flexWrap,
                gap: gap,
                padding: padding}}>
                    {children}
        </div>
    )
}

FlexBoxContainer.defaultProps = defaultProps;

export default FlexBoxContainer;
