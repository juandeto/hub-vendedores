import * as React from 'react';


interface EmbedYoutubeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
    width?: string
    height?: string
    id: string,
    title: string
}

const defaultProps = {
    width: '853',
    height: '480'
}

const EmbedYoutube: React.FC<EmbedYoutubeProps> = function({ width, height, id, title, ...props }) {
  return <div className="video__responsive">
             <iframe
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
                {...props}
                />
        </div>
}

EmbedYoutube.defaultProps = defaultProps

export default EmbedYoutube;