import  { FC } from 'react'; 
import Title from 'components/basics/Title'
import Paragraph from 'components/basics/Paragraph'
import List from 'components/basics/List'
import Spacer from 'components/basics/Spacer'



const StaticHeroTitles: FC = () => {

    const itemsList = [
        {content: "Guía paso a paso para principiantes"},
        {content: 'Aprenda a vender con publicidad'},
        {content: 'Aumente sus ventas con Inteligencia Artificial'}
    ]

    return (
        <div className="staticHero_titles">
            <Title title="Edición 2021" color="primary" Tag="h2"/><br/>
            <Title title="Como vender mas en Mercado Libre" color="primary" Tag="h2"/>
            <Spacer type="vertical" size="24px" />
            <Paragraph 
            fontSize="big"
            paragraph="Todo lo que necesitas saber para comenzar a vender en Mercado Libre" />
            <List items={itemsList} fontSize="big" fontWeight="bold" colorBullet="text"/>
        </div>
    )
}

export default StaticHeroTitles;