import React from 'react';
import PropTypes from 'prop-types';
import Card, {CardAvatar, CardDetails, CardItem} from './../../../../../../components/Card/Card';

import './RepositoryCard.css';

const RepositoryCard = ({repository}) => (
        <Card className="repositories__card">
            <CardAvatar imageSrc={repository.ownerAvatarUrl}/>
            <CardDetails>
                <CardItem label="Name">{repository.name}</CardItem>
                <CardItem label="Stars">{repository.startGazersCount}</CardItem>
                <CardItem label="Forks">{repository.forksCount}</CardItem>
            </CardDetails>
        </Card>

);


RepositoryCard.propTypes = {
    repository: PropTypes.shape({
        ownerAvatarUrl: PropTypes.string,
        name: PropTypes.string.isRequired,
        startGazersCount: PropTypes.number.isRequired,
        forksCount: PropTypes.number.isRequired,
    }).isRequired,
};

export default RepositoryCard;