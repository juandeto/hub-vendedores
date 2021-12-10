import  { FC } from 'react'; 

interface PropsSpacer {
    type: SpacerType,
    size: string
}

type SpacerType = 'horizontal' | 'vertical'

const Spacer: FC<PropsSpacer> = function({type="vertical", size}) {

    switch (type) {
        case 'horizontal': return <span style={{width: size}} className="spacer horizontal" />
        case 'vertical': return <div style={{height: size}} className="spacer vertical" />
        default: return null
    }
}

export default Spacer;