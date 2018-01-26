import React from 'react';
import PropTypes from 'prop-types';

const SortDropdown = ({name, value, onChange}) => (
    <select
        name={name}
        className="repositories__search-sort-dropdown"
        onChange={onChange}
        value={value}
    >
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="updated">Last updated</option>
    </select>
);

SortDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default SortDropdown;
