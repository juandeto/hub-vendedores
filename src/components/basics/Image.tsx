import  { FC } from 'react'; 

interface PropsImg {
    width?: string
    height?: string
    objectFit?: 'cover' | 'contain'
    src: string
}


const Image: FC<PropsImg> = function({width="100%", height="100%", objectFit="cover", src}) {
  return <div className="imageJsx" style={{width, height}}>
        <img src={src}  style={{objectFit}} className="imageJsx__img" />
    </div>
}

export default Image;