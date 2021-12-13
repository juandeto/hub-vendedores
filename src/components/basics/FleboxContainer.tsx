import  { FC } from 'react'; 


type direction = "column" | "column-reverse" | "row" | "row-reverse" | "-moz-initial" | "inherit" | "initial" | "revert" | "unset"
type wrap = "nowrap" | "wrap" | "wrap-reverse" 


interface PropsFlexBoxContainer {
    justifyContent?: string,
    alignItems?: string,
    flexDirection?: direction & 'column',
    flexBasis?: string,
    flexWrap?: wrap & 'wrap',
    gap?: string,
    padding?: string
}

const defaultProps: Partial<PropsFlexBoxContainer> = {
    justifyContent: "normal",
    alignItems:"center",
    flexBasis:"content",
    gap:"16px",
    flexWrap: "wrap",
    padding:"8px 16px",
    flexDirection: 'column'
}

const FlexBoxContainer: FC<PropsFlexBoxContainer> = function({
    justifyContent,
    alignItems,
    flexDirection,
    flexBasis,
    flexWrap,
    gap,
    padding,
    ...props
}) {

    return (
        <div style={{
                display: "flex",
                alignItems,
                justifyContent,
                flexDirection, 
                flexBasis, 
                flexWrap,
                gap,
                padding}}>
                    {props.children}
        </div>
    )
}

FlexBoxContainer.defaultProps = defaultProps;

export default FlexBoxContainer;
