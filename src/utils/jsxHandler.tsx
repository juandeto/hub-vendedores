import * as React from 'react'
import Paragraph from 'components/basics/Paragraph'
import List from 'components/basics/List'
import Title from 'components/basics/Title'
import {JsxProps} from 'react-app-env'
import Spacer from 'components/basics/Spacer'
import EmbedYoutube from 'components/basics/EmbedYoutube'
import Image from 'components/basics/Image'


// eslint-disable jsx-props-no-spreading
const jsxHandler: React.FC<JsxProps> = ({type, properties, key}) => {


       switch (type) {// eslint-disable-next-line
        case 'paragraph': return <Paragraph key={key} paragraph={properties.paragraph} {...properties} />
            
        case 'title': return <Title key={key} title={properties.title} {...properties}/>
        
        case 'list': return <List key={key} items={properties.items} {...properties}/>

        case 'spacer': return <Spacer key={key} size={properties.size} {...properties}/>

        case 'youtube-video': return <EmbedYoutube key={key} id={properties.id} {...properties} />

        case 'image': return <Image key={key} src={properties.src} {...properties}/>

        default: return <Paragraph key={key} paragraph="No element selected" />
    } 
}


export default jsxHandler;