import  { FC } from 'react'; 
import  MODULES_CONTENT  from 'utils/ModulesContents'
import List, {Item} from 'components/basics/List'
import { useTranslation } from 'react-i18next';


const ModuleList: FC = function() {
    const { t } = useTranslation('modules');

    const moduleLinks: Item[] = MODULES_CONTENT.map(m => {
        return {children: <a className="moduleList__link" href={`#${t(m.id)}`}>{t(m.title)}</a>}
    })

    return (
        <List 
        items={moduleLinks}
        ListType="ol" 
        bulletType='number'
        colorBullet="text" 
        lineHeight="24px" 
        margin="20px 0"/>
    )
}

export default ModuleList;