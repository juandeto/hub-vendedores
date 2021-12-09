import  { FC } from 'react'; 
import Markdown from 'react-markdown'

interface PropsParagraph {
    fontSize?: sizes,
    color?: 'primary' | 'text',
    paragraph: string,
    lineHeight?: string
}

export type sizes = 'bigger' | 'big' | 'normal' | 'small' | 'tiny' | undefined

const Paragraph: FC<PropsParagraph> = ({paragraph, color="text", fontSize="normal", lineHeight="normal"}) => {

    return (
        <Markdown 
             children={paragraph} 
             components={{
                p: (node) => <p className={`paragraph ${color}-c ${fontSize}-fz`} style={{ lineHeight: lineHeight}}>{node.children}</p>,
                strong: (node) => <strong>{node.children}</strong>,
                a: (node) => <a href={node.href} target="_blank" rel="noopener noreferrer">{node.children}</a>
             }} />
    )
}

export default Paragraph;