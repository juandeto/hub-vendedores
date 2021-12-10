import  { FC, ReactElement } from 'react';



interface PropsIconooltip {
    label?: string,
    icon:  ReactElement,
    cta?: (() => void),
    href?: string,
    position?: 'top' | 'bottom' | 'right' | 'left' & 'bottom',
    color?: 'primary' | 'secondary' | 'text' & 'primary',
    fontSize?: string
}

const defaultProps = {
    label: undefined,
    cta: undefined,
    href: undefined,
    fontSize: '1.3rem'
}

const IconTooltip: FC<PropsIconooltip> = function({ 
                    label, 
                    icon, 
                    cta, 
                    href, 
                    fontSize,
                    color,
                    position}) {

function filterKeyEnter(handler: React.KeyboardEvent<HTMLDivElement>) {
                            return (e: React.KeyboardEvent<HTMLDivElement> )=> {
                              if (e.key === "Enter") {
                                cta
                              }
                            }
                          }
                        
  return <div 
        role='button'
        style={{fontSize}}
        className={`iconTooltip ${color}`}
        tabIndex={0}
        onKeyDown={(e) => filterKeyEnter(e)}
        onClick={cta}>
           {href ? <a href={href} rel="noopener noreferrer" target="_blank">{icon}</a>: icon}
            <span
            aria-hidden="true"
            className={`iconTooltip__label ${position}`}>{label}</span>
        </div>
}

IconTooltip.defaultProps = defaultProps


export default IconTooltip;