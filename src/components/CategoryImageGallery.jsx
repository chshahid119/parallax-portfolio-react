import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ImageGallery = ({categoryImages }) => {


  return (
    <div className="px-4 mb-[20rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {categoryImages.map((image, index) => (
          <div key={index} className="relative overflow-hidden shadow-md group">
            <NavLink to={`/category/${image.id}`}>
              <img
                src={image.image_url}
                alt={image.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-montserat opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ margin: '70px', fontFamily: 'Bebas Neue', letterSpacing: '2px' }}>
                  {image.title}
                </span>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  categoryTypeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ImageGallery;
