import  { FC } from 'react'; 
import Markdown from 'react-markdown'
import { useTranslation } from 'react-i18next';

interface PropsParagraph {
    fontSize?: sizes,
    color?: color,
    paragraph: string,
    lineHeight?: string,
    display?: string
}

export type sizes = 'bigger' | 'big' | 'normal' | 'small' | 'tiny' | undefined
type color = 'primary' | 'text'

const defaultProps = {
    fontSize: 'normal' as sizes,
    color: 'text' as color,
    lineHeight: 'normal',
    display: "block"
}

const Paragraph: FC<PropsParagraph> = function({paragraph, color, fontSize, lineHeight, display}) {
    const { t } = useTranslation('modules');
    const translate = t(paragraph)
    return (
        <Markdown 
        /* eslint react/no-children-prop: ["error", { "allowSelfClosing": true }] */
             children={translate} 
             components={{
                p: (node) => <p className={`paragraph ${color}-c ${fontSize}-fz`} style={{ lineHeight, display: display}}>{node.children}</p>,
                strong: (node) => <strong>{node.children}</strong>,
                a: (node) => <a href={node.href} target="_blank" rel="noopener noreferrer">{node.children}</a>
             }} />
    )
}

Paragraph.defaultProps = defaultProps

export default Paragraph;