import  { FC } from 'react'; 
import Title from 'components/basics/Title'
import Paragraph from 'components/basics/Paragraph'
import List from 'components/basics/List'
import Spacer from 'components/basics/Spacer'
import { useTranslation } from 'react-i18next';


const StaticHeroTitles: FC = function() {
    const { t } = useTranslation('modules');
    const itemsList = [
        {content: "staticHero.list1.0"},
        {content: "staticHero.list1.1"},
        {content: "staticHero.list1.2"}
    ]

    return (
        <div className="staticHero_titles">
            <Title title={t('staticHero.edition')} color="primary" Tag="h2"/><br/>
            <Title title={t('staticHero.title')} color="primary" Tag="h1"/>
            <Spacer type="vertical" size="24px" />
            <Paragraph 
            fontSize="big"
            paragraph={t('staticHero.slogan')} />
            <List items={itemsList} fontSize="big" fontWeight="bold" colorBullet="text"/>
        </div>
    )
}

export default StaticHeroTitles;