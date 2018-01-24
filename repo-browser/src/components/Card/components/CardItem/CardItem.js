import React from 'react';
import PropTypes from 'prop-types';

import './CardItem.css';

const CardItem = ({label, children}) => (
    <div className="card--item">
        <span className="card--label">{`${label}: `}</span>{children}
    </div>
);

CardItem.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default CardItem;