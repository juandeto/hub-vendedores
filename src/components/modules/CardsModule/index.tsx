import  { FC } from 'react'; 
import FreeTrialBtn from 'components/layout/FreeTrialBtn'
import SidebarModules from 'components/modules/SidebarModules'
import CardsDisplay from 'components/modules/CardsModule/CardsDisplay'


const ContentModules: FC = function() {
  return <section className="contentModules">
            <SidebarModules />
            <CardsDisplay />
            <FreeTrialBtn />
        </section>
}

export default ContentModules;