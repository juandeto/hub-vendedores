import  { FC } from 'react'; 
import StaticHeroTitles from 'components/layout/StaticHeroTitles'
import Image from 'components/basics/Image'
import heroImg from 'assets/hero-img.png'



const StaticHero: FC = () => (
        <div className="staticHero">
            <StaticHeroTitles />
            <Image src={heroImg} width="40%" objectFit="contain"/>
        </div>
    )

export default StaticHero;