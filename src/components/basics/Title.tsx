import  { FC } from 'react'; 

interface PropsTitle {
    Tag?: tag,
    color?: color,
    title: string,
    onClick?: () => void
}

type tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type color =  'primary' | 'secondary' | 'text'

const defaultProps = {
    Tag: 'h3' as tag,
    color: 'text' as color,
    onClick: undefined
}

const Title: FC<PropsTitle> = function({Tag="h3", color, title, onClick}) {
  return <Tag 
        onClick={onClick}
        className={`title ${color}`}>
            {title}
        </Tag>
}

Title.defaultProps = defaultProps

export default Title;