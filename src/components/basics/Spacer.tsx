import  { CSSProperties, FC } from 'react'; 

interface PropsSpacer extends React.HTMLAttributes<HTMLSpanElement>  {
    type?: SpacerType,
    size: string,
    style?: CSSProperties
}

type SpacerType = 'horizontal' | 'vertical'

const defaultProps = {
    style: {} as CSSProperties,
    type: 'vertical' as SpacerType
}

const Spacer: FC<PropsSpacer> = function({type, size, style, ...props}) {

    const width = type === 'vertical' ? 1 : size;
    const height = type === 'horizontal' ? 1 : size;

    return (
      <span
      role="separator"
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...props}
      >

      </span>  
    )
}

Spacer.defaultProps = defaultProps;

export default Spacer;