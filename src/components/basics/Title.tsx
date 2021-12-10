import  { FC } from 'react'; 

interface PropsTitle {
    Tag?: tag,
    color?: 'primary' | 'secondary' | 'text',
    title: string,
    onClick?: () => void
}



type tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const Title: FC<PropsTitle> = function({Tag="h3", color="primary", title, onClick}) {
  return <Tag 
        onClick={onClick}
        className={`title ${color}`}>
            {title}
        </Tag>
}

export default Title;