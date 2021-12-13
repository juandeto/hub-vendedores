import  { FC, ReactElement } from 'react';


type position = 'top' | 'bottom' | 'right' | 'left' & 'bottom'
type color = 'primary' | 'secondary' | 'text'

interface PropsIconooltip {
    label?: string,
    icon:  ReactElement,
    cta?: (() => void),
    href?: string,
    position?: position,
    color?:  color,
    fontSize?: string
}

const defaultProps = {
    label: undefined,
    href: undefined,
    fontSize: '1.3rem',
    cta: undefined,
    position: 'bottom' as position,
    color: 'primary' as color
}


const IconTooltip: FC<PropsIconooltip> = function({ 
                    label, 
                    icon, 
                    cta, 
                    href, 
                    fontSize,
                    color,
                    position}) {

function filterKeyEnter(e: React.KeyboardEvent<HTMLDivElement>) {
                            if (e.key === "Enter" && cta) {
                                cta() 
                              }
                          }
                        
  return <div 
        role='button'
        style={{fontSize}}
        className={`iconTooltip ${color}`}
        tabIndex={0}
        onKeyDown={(e) => filterKeyEnter(e)}
        onClick={cta}>
           {href ? <a href={href} 
                        aria-label={`link to ${label}`} 
                        rel="nofollow noopener noreferrer" 
                        target="_blank">{icon}</a>: icon}
            <span
            aria-hidden="true"
            className={`iconTooltip__label ${position}`}>{label}</span>
        </div>
}

IconTooltip.defaultProps = defaultProps


export default IconTooltip;