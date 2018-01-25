import React from "react";
import './Grid.css';

const Grid = ({children, noItemsMessage = 'No items'}) => {

    if (React.Children.count(children) === 0) {
        return <div>{noItemsMessage}</div>;
    }

    return (
        <div className="grid">
            {children}
        </div>
    );
};

export default Grid;
