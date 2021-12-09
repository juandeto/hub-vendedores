import * as React from 'react'
import classNames from 'classnames'

const SPY_INTERVAL = 100;

interface SpyItem {
  inView: boolean;
  element: HTMLElement;
}

 interface ScrollspyProps {
  ids: string[];
  offset: number;
  itemContainerClassName?: string;
  activeItemClassName?: string;
  itemClassName?: string;
}

interface ScrollspyState {
  items: SpyItem[];
}




class Scrollspy extends React.Component<ScrollspyProps, ScrollspyState> {
    constructor(props: any) {
     super(props);
     this.state = {
       items: []
     };
   }
   
   public static defaultProps: Partial<ScrollspyProps> = {
     offset: 2
   };
      
   private timer: number;
 
   private spy() {
     const items = this.props.ids
       .map(id => {
         const element = document.getElementById(id);
         if (element) {
           return {
             inView: this.isInView(element),
             element
           } as SpyItem;
         } else {
           return;
         }
       })
       .filter(item => item);
 
     const firstTrueItem = items.find(item => !!item && item.inView);
 
     if (!firstTrueItem) {
       return; // dont update state
     } else {
       const update = items.map(item => {
         return { ...item, inView: item === firstTrueItem } as SpyItem;
       });
 
       this.setState({ items: update });
     }
   }
 
   public componentDidMount() {
     this.timer = window.setInterval(() => this.spy(), SPY_INTERVAL);
   }
 
   public componentWillUnmount() {
     window.clearInterval(this.timer);
   }
 
   private isInView = (element: HTMLElement) => {
     if (!element) {
       return false;
     }
     const { offset } = this.props;
     const rect = element.getBoundingClientRect();
 
     return rect.top >= 0 - offset && rect.bottom <= window.innerHeight + offset;
   };
 
   private scrollTo(element: HTMLElement) {
     element.scrollIntoView({
       behavior: "smooth",
       block: "start",
       inline: "nearest"
     });
   }
 
  
   
   public render() {
     const {
       itemContainerClassName,
       activeItemClassName,
       itemClassName
     } = this.props;
     return (
       <ul className={classNames(itemContainerClassName)}>
         {this.state.items.map((item, k) => {
           return (
             <li
               className={classNames(
                 itemClassName,
                 item.inView ? activeItemClassName : null
               )}
               key={k}
               onClick={() => {
                 this.scrollTo(item.element);
               }}
             >
               {item.element.innerText}
             </li>
           );
         })}
       </ul>
     );
   }
   
 }

 export default Scrollspy