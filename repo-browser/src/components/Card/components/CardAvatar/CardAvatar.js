import React from 'react';
import PropTypes from 'prop-types';

import './CardAvatar.css';

const CardAvatar = ({imageSrc}) => (
    <div className="card__image-container">
        <img
            src={imageSrc}
            alt=""
            className="card__image"
        />
    </div>
);

CardAvatar.propTypes = {
    imageSrc: PropTypes.string,
};

export default CardAvatar;