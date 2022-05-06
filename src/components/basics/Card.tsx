import { FC } from 'react';


interface CardProps {
    id: string,
    addedClass?: string
}

const defaultProps = {
    addedClass: "",
}

const Card: FC<CardProps> = function({ children, id, addedClass }) {


    return (
        <section 
        data-testid="moduleCard"
        id={id}
        className={`card__container ${addedClass}`}>
           {children}
        </section>
    )
}

Card.defaultProps = defaultProps;

export default Card;