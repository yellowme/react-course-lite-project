import React from 'react';
import PropTypes from 'prop-types';

const LanguageDropdown = ({name, onChange, value}) => {
    return (
        <select
            name={name}
            className="repositories__search-language-dropdown"
            value={value}
            onChange={onChange}
        >
            <option value="php">Php</option>
            <option value="ruby">Ruby</option>
            <option value="javascript">Javascript</option>
        </select>
    );
};

LanguageDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default LanguageDropdown;
