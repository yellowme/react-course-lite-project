import React from 'react';
import classnames from 'classnames';

import './Card.css';
import CardDetails from "./components/CardDetails/CardDetails";
import CardAvatar from "./components/CardAvatar/CardAvatar";
import CardItem from "./components/CardItem/CardItem";
import CardLink from "./components/CardLink/CardLink";


const Card = ({children, className}) => (
    <div className={classnames("card", className)}>
        {children}
    </div>
);

export {
    CardDetails,
    CardAvatar,
    CardItem,
    CardLink
};
export default Card;