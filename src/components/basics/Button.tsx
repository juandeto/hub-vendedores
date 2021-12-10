import  { FC } from 'react'; 
import 'styles/3-basics/_buttons.scss';

type BtnType = 'primary' | 'secondary' | undefined

interface PropsBtn {
    type: BtnType & 'primary',
    label: string,
    disabled?: boolean,
    styles?: React.CSSProperties,
    cta: (() => void) | undefined
}

const defaultProps = {
    disabled: false,
    styles: {}
}


const Button: FC<PropsBtn> = function({ label, type, disabled, cta, styles }) {


    return (
        <button 
        type="button"
        style={{...styles}}
        disabled={disabled}
        className={`buttonType ${type}-button`}
        onClick={cta}
        >
            {label}
        </button>
    )
}

Button.defaultProps = defaultProps;

export default Button;