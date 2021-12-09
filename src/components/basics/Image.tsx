import  { FC } from 'react'; 

interface PropsImg {
    width?: string
    height?: string
    objectFit?: 'cover' | 'contain'
    src: string
}


const Image: FC<PropsImg> = ({width="100%", height="100%", objectFit="cover", src}) => (
    <div className={`imageJsx`} style={{width: width, height: height}}>
        <img src={src}  style={{objectFit: objectFit}} className={`imageJsx__img`} />
    </div>
    )

export default Image;