import React from 'react';
import * as classnames from "classnames";
import './CardDetails.css'


const CardDetails = ({children,className}) => (
    <div className={classnames('card__details',className)}>
        {children}
    </div>
);

export default CardDetails;