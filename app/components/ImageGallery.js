// components/ImageGallery.js
import React from 'react';

const ImageGallery = ({ images }) => (
  <div className="image-gallery">
    {images.map((image, index) => (
      <img key={index} src={image} alt={`Image ${index + 1}`} />
    ))}
  </div>
);

export default ImageGallery;
