import  { FC } from 'react'; 
import StaticHeroTitles from 'components/layout/StaticHeroTitles'
import Image from 'components/basics/Image'
import heroImg from 'assets/hero-img.png'



const StaticHero: FC = function() {
  return <div className="staticHero" role="presentation">
            <StaticHeroTitles />
            <Image src={heroImg} alt="Hero image: delivery workers" width="40%" styles={{"objectFit":"contain"}}/>
        </div>
}

export default StaticHero;