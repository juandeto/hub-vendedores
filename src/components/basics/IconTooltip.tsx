import  { FC, ReactElement } from 'react';



interface PropsIconooltip {
    label?: string,
    icon:  ReactElement,
    cta?: (() => void) | undefined,
    href?: string,
    position?: 'top' | 'bottom' | 'right' | 'left',
    color?: 'primary' | 'secondary' | 'text',
    fontSize?: string
}

const IconTooltip: FC<PropsIconooltip> = ({ 
                    label, 
                    icon, 
                    cta, 
                    href, 
                    fontSize="1.3rem",
                    color="primary",
                    position="bottom"}) => (
        <div 
        role={`icon ${label}`}
        style={{fontSize: fontSize}}
        className={`iconTooltip ${color}`}
        onClick={cta}>
           {href ? <a href={href} rel="noopener noreferrer" target="_blank">{icon}</a>: icon}
            <span
            className={`iconTooltip__label ${position}`}>{label}</span>
        </div>
    )

export default IconTooltip;