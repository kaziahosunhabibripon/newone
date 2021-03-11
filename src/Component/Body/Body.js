import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Body.css';

const Body = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        // const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`;
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTeams(data.teams))
    }, [teams])

    return (
        <div className='row m-0 p-0'>
            {
                teams && teams.map(team =>
                    <Team team={team} key={team.idTeam}> </Team>)
            }
        </div>
    );
};

export default Body;