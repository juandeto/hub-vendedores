import  { FC } from 'react'; 
import Title from 'components/basics/Title'
import BoxContent from 'components/basics/BoxContent'
import ModuleList from 'components/layout/ModuleList'
import { useTranslation } from 'react-i18next';


const SideBarModules: FC = function() {
    const { t } = useTranslation('modules');
  return <aside>
            <BoxContent styles={{position: "sticky", padding: "16px 40px", top: "0", margin: "4px", borderRadius: "3px"}}>
                <Title title={t("sideBarModules.title")} Tag="h3" color="primary"/>
                <div className="titleUnderline"></div>
                <ModuleList />
            </BoxContent>
        </aside>
}

export default SideBarModules;