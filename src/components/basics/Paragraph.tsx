import  { FC } from 'react'; 
import Markdown from 'react-markdown'

interface PropsParagraph {
    fontSize?: sizes,
    color?: color,
    paragraph: string,
    lineHeight?: string
}

export type sizes = 'bigger' | 'big' | 'normal' | 'small' | 'tiny' | undefined
type color = 'primary' | 'text'

const defaultProps = {
    fontSize: 'normal' as sizes,
    color: 'text' as color,
    lineHeight: 'normal'
}

const Paragraph: FC<PropsParagraph> = function({paragraph, color, fontSize, lineHeight}) {

    return (
        <Markdown 
        // eslint-disable-next-line
             children={paragraph} 
             components={{
                p: (node) => <p className={`paragraph ${color}-c ${fontSize}-fz`} style={{ lineHeight}}>{node.children}</p>,
                strong: (node) => <strong>{node.children}</strong>,
                a: (node) => <a href={node.href} target="_blank" rel="noopener noreferrer">{node.children}</a>
             }} />
    )
}

Paragraph.defaultProps = defaultProps

export default Paragraph;