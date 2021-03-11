import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Team = (props) => {
    // console.log(props.team);
    const { strTeamBadge, strTeam, strSport, idTeam } = props.team;
    return (
        <div className="col-md-4 my-2 py-3">
            <Card className="m-2 p-5">
                <Card.Img variant="top" src={strTeamBadge || "https://i.ibb.co/ScnLDR2/CDR.jpg"} alt="team-logo" />
                <Card.Body>
                    <Card.Title>
                        <h1> {strTeam} </h1>
                    </Card.Title>
                    <Card.Text className="paragraph">
                        Sports type: {strSport}
                    </Card.Text>
                    <Link to={`/detail/${idTeam}`}>
                        <Button className="btn btn-primary"> Explore &nbsp; <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;