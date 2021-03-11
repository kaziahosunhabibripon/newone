import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap';
import Female from '../../Images/female.png';
const TeamDetails = (props) => {
    console.log(props.team);
    const {
        strTeam, strAlternate, idTeam,
        strTeamBadge, strTeamBanner,
        strTwitter, strWebsite,
        strYoutube, strStadium,
        strFacebook, strDescriptionEN,
        intFormedYear, strCountry, strGender, strInstagram, strLeague
    } = props.team;
    return (
        <div className="row m-0 p-0">
             {/* <img src={strTeamBadge} alt="team-badge" />  */}
            <div className="row col-md-12  justify-content-center align-item-center">
                    <Card className="d-flex col-sm-6">
                        <Card.Body >
                            <h1> {idTeam}</h1>
                            <p> {strTeam}</p>
                            <p> {strGender}</p>
                            <p> {strLeague}</p>
                        </Card.Body>
                    </Card>
                    <Card className="d-flex col-sm-6">
                      <Card.Img  variant="top" src={Female} alt="team-badge"/>
                    </Card>

                <p> {strAlternate}</p>
                <p> {strTwitter}</p>
                <p> {strWebsite}</p>
                <p> {strYoutube}</p>
                <p> {strStadium}</p>
                <p> {strFacebook}</p>
                <p> {strInstagram}</p>

                <p> {strDescriptionEN}</p>
                <p> {intFormedYear}</p>
                <p> {strCountry}</p>
            </div>
        </div>
    );
};

export default TeamDetails;