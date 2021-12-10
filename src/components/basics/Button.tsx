import  { FC } from 'react'; 
import 'styles/3-basics/_buttons.scss';

type BtnType = 'primary' | 'secondary'

interface PropsBtn {
    type?: BtnType,
    label: string,
    disabled?: boolean,
    styles?: React.CSSProperties,
    cta: (() => void) | undefined
}

const Button: FC<PropsBtn> = ({ label, type = "primary", disabled = false, cta, styles }: PropsBtn) => {



    return (
        <button 
        style={{...styles}}
        disabled={disabled}
        className={`buttonType ${type}-button`}
        onClick={cta}
        >
            {label}
        </button>
    )
}

export default Button;