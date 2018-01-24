import React from 'react';
import PropTypes from 'prop-types';

import './CardLink.css';

const CardLink = ({href, children}) => (
    <div>
        <a className="card__link" target="_blank" href={href}>{children}</a>
    </div>
);

CardLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.any,
};

export default CardLink;