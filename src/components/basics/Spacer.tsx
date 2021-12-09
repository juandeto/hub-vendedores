import  { FC } from 'react'; 

interface PropsSpacer {
    type: SpacerType,
    size: string
}

type SpacerType = 'horizontal' | 'vertical'

const Spacer: FC<PropsSpacer> = ({type="vertical", size}) => {

    switch (type) {
        case 'horizontal': return <span style={{width: size}} className="spacer horizontal"></span>
        case 'vertical': return <div style={{height: size}} className="spacer vertical"></div>
        default: return null
    }
}

export default Spacer;