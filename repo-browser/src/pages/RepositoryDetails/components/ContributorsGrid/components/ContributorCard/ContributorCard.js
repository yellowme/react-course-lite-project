import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, {CardAvatar, CardDetails, CardItem, CardLink} from "../../../../../../components/Card/Card";

class ContributorCard extends Component {

    render() {
        const {contributor} = this.props;
        return (
            <Card>
                <CardAvatar imageSrc={contributor.avatarUrl}/>
                <CardDetails>
                    <CardItem label="Name">{contributor.loginName}</CardItem>
                    <CardLink href={contributor.githubPageLink}>Github</CardLink>
                </CardDetails>
            </Card>
        );
    }
}

ContributorCard.propTypes = {
    contributor: PropTypes.shape({
        avatarUrl: PropTypes.string,
        loginName: PropTypes.string.isRequired,
        githubPageLink: PropTypes.string.isRequired,
    })
};

export default ContributorCard;




