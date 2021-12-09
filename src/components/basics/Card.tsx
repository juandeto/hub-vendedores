import * as React from 'react';

type ChildElems = (JSX.Element | null) | (JSX.Element | null)[]


interface CardProps {
    children: ChildElems,
    id: string,
    addedClass?: string
}

const Card: React.FC<CardProps> = ({ children, id, addedClass }) => {

    return (
        <article 
        id={id}
        className={`card__container ${addedClass ? addedClass : ""}`}>
           {children}
        </article>
    )
}


export default Card;