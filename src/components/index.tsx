import  { FC } from 'react'; 
import MainWrapper from 'components/basics/MainWrapper'
import StaticHero from 'components/modules/StaticHero'
import DivisorBar from 'components/modules/DivisorBar'
import CardsModule from 'components/modules/CardsModule'

const Main: FC = function() {
    
    return (
        <MainWrapper>
            <StaticHero />
            <DivisorBar />
            <CardsModule />
        </MainWrapper>
    )
}

export default Main;