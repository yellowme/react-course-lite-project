import React from 'react';
import PropTypes from 'prop-types';

const SearchBarInput = ({name, value, onChange}) => {
    return (
        <input
            placeholder="Type keywords"
            className="repositories__search-text-input"
            name={name}
            onChange={onChange}
            type="text"
            value={value}
        />
    )
};

SearchBarInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
};

export default SearchBarInput;
