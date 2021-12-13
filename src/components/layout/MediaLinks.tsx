import  { FC } from 'react'; 
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import IconTooltip from 'components/basics/IconTooltip'


const MediaLinks: FC = function() {

    const mediaLinks = [
        {
            label: 'Facebook',
            icon: <FaFacebook />,
            href: "https://www.facebook.com/"
        },
        {
            label: 'Linkedin',
            icon: <FaLinkedin />,
            href: "https://www.facebook.com/"
        },
        {
            label: 'Intagram',
            icon: <FaInstagram />,
            href: "https://www.facebook.com/"
        },
        {
            label: 'Youtube',
            icon: <FaYoutube />,
            href: "https://www.facebook.com/"
        },
    ]

    return (
        <div className="mediaLinks" role="navigation">
            {
                mediaLinks.map((props) => <IconTooltip key={props.label} {...props}/>)
            }
        </div>
    )
}

export default MediaLinks;