import  { FC } from 'react'; 
import 'styles/3-basics/_buttons.scss';

type BtnType = 'primary' | 'secondary'

interface PropsBtn {
    type?: BtnType,
    label: string,
    disabled?: boolean
    cta: (() => void) | undefined
}

const Button: FC<PropsBtn> = ({ label, type = "primary", disabled = false, cta }: PropsBtn) => {



    return (
        <button 
        disabled={disabled}
        className={`buttonType ${type}-button`}
        onClick={cta}
        >
            {label}
        </button>
    )
}

export default Button;