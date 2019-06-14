import React from 'react';
import images from "./cards.json";
import './card.css'

const card = function ({clickHandler}) {
    return (
        <div className="card-container">
            {images.map(image => {
                return <img onClick={clickHandler} alt='clone wars images' key={image.id} id={image.id} className="" src={image.img} />
            })} 
        </div> 
    )
}
export default card