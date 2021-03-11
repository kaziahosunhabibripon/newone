import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetails from '../TeamDetails/TeamDetails';
const Detail = () => {
    const { idTeam } = useParams();
    const [teams, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTeam(data.teams))
    }, [idTeam])
    
    return (
        <div className="row m-0 p-0">
            {
                teams && teams.map(team =>
                    <TeamDetails key={team.idTeam} team={team}> </TeamDetails>)
            }

        </div>
    );
};

export default Detail;