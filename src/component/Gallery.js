import React, { useState, useEffect,useLayoutEffect } from 'react'

const Gallery = (props) => {
    var [photos, setPhotos] = useState(props.photos);
    var [photo, setPhoto] = useState((props.photos.length) ? props.photos[0].url : "no-image.jpg");
    useLayoutEffect(() => {
        setPhotos(props.photos);
        setPhoto((props.photos.length) ? props.photos[0].url : "no-image.jpg")
    }, [props.photos])
    return (
        <article className="gallery-wrap">
            <div className="img-big-wrap">
                <div> <a><img src={"../../images/products/" + (props.photos?photo:"no-image.jpg")} /></a></div>
            </div>
            <div className="thumbs-wrap">
                {(!photos.length) ? "" : photos.map((x, index) => <a onMouseEnter={() => setPhoto(photos[index].url)} className="item-thumb" key={index}> <img src={"../../images/products/" + x.url} alt={x.url.split(".")[0]} /></a>)}
            </div>
        </article>
    )
}
export default Gallery