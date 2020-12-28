import React, { useState, useEffect } from 'react'

const Gallery = (props) => {
    var [photos, setPhotos] = useState(props.photos);
    var [photo, setPhoto] = useState((photos.length) ? photos[0].url : "no-image.jpg");
    useEffect(() => {
        console.log("useffect")
        setPhotos({...props.photos})
    }, [])
    return (
        <article className="gallery-wrap">
            <div className="img-big-wrap">
                <div> <a><img src={"../../images/products/" + (photo)} /></a></div>
            </div>
            <div className="thumbs-wrap">
                {(!photos.length) ? "" : photos.map((x, index) => <a onMouseEnter={() => setPhoto(photos[index].url)} className="item-thumb" key={index}> <img src={"../../images/products/" + x.url} alt={x.url.split(".")[0]} /></a>)}
            </div>
        </article>
    )
}
export default Gallery