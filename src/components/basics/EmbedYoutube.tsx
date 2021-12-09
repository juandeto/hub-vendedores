import * as React from 'react';


interface EmbedYoutubeProps {
    width?: string
    height?: string
    id: string
}

const EmbedYoutube: React.FC<EmbedYoutubeProps> = ({ width="853", height="480", id }) => (
        <div className="video__responsive">
             <iframe
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
        </div>
    )



export default EmbedYoutube;