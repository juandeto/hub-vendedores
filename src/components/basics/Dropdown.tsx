import  { FC } from 'react'; 
import 'styles/3-basics/_buttons.scss';

type direction = "vertical" | "horizontal"

interface PropsBtn {
  items: string[],
  show: boolean,
  cta: (arg: string) => void,
  currentValue?: string,
  containerClass?: string,
  itemClass?: string,
  direction?: direction
}

const defaultProps = {
    currentValue: "",
    containerClass:"",
    itemClass: "",
    direction: "vertical" as direction
}


const Dropdown: FC<PropsBtn> = function({ items, cta, currentValue="", show="false", containerClass, itemClass, direction }) {

    function filterKeyEnter(e: React.KeyboardEvent<HTMLSpanElement>, item: string) {
        if (e.key === "Enter" && cta) {
            cta(item) 
          }
      }

    return (
       <div className={`dropdown__menu 
                        ${direction}
                        ${show && "show"} 
                        ${containerClass}`
                     } role="menu">
           {
               items.map((item: string, idx: number) =>{ 
               
               return <span 
                        onKeyDown={(e) => filterKeyEnter(e, item)}
                        // eslint-disable-next-line
                        key={idx}
                        onClick={() => cta(item)} 
                        tabIndex={0}
                        className={`dropdown__item ${currentValue === item && 'current'} ${itemClass}`} 
                        role="menuitem">{item}</span>})
           }
       </div>
    )
}

Dropdown.defaultProps = defaultProps;

export default Dropdown;