import  { CSSProperties } from 'react'; 


interface PropsImg {
    width?: string
    height?: string
    styles?: CSSProperties
    src: string,
    alt: string
}

const defaultProps = {
    width: "100%",
    height: "100%",
    styles: {} as CSSProperties
}

const Image: React.FC<PropsImg> = function({width, height, src, alt, styles}) {

  return <div className="imageJsx" style={{width, height}}>
        <img src={src} alt={alt}  style={{...styles}} className="imageJsx__img" />
    </div>
}

Image.defaultProps = defaultProps;

export default Image;