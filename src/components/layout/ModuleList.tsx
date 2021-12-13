import  { FC } from 'react'; 
import  MODULES_CONTENT  from 'utils/ModulesContents'
import List, {Item} from 'components/basics/List'

const ModuleList: FC = function() {

    const moduleLinks: Item[] = MODULES_CONTENT.map(m => {
        return {children: <a className="moduleList__link" href={`#${m.id}`}>{m.title}</a>}
    })


    return (
        <List 
        items={moduleLinks} 
        ListType="ol" 
        bulletType='number'
        colorBullet="text" 
        lineHeight="24px" 
        margin="24px 0"/>
    )
}

export default ModuleList;